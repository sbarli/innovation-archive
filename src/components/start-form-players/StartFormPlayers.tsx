import { ARRAY_ERROR } from 'final-form';
import arrayMutators from 'final-form-arrays';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

import RenderText from '../../libs/forms/fields/RenderText/RenderText';
import { minChar, required } from '../../libs/forms/utils/validation';
import { StyledError } from '../../libs/forms/validation/field-error/FieldError.styled';
import { Button, ButtonSizes, ButtonThemes } from '../../libs/ui/Button';
import { formatPlayerId } from '../../utils/players';

import {
  StyledErrorWrapper,
  StyledForm,
  StyledHeader,
  StyledPlayerFields,
  StyledPlayerInput,
  StyledRemove,
} from './StartFormPlayers.styled';

const BASE_PLAYER = { name: '' };

const createNewPlayer = () => Object.assign({}, BASE_PLAYER);

const min2Char = minChar(2);

const INITIAL_PLAYERS = [createNewPlayer(), createNewPlayer()];

interface IPlayer {
  name: string;
}

const validateForm = (values: { players: IPlayer[] }) => {
  const errors: { players?: string[] } = {};
  const filledPlayers = values.players.filter(p => p.name);
  if (!values.players || filledPlayers.length < 2) {
    errors.players = [];
    // @ts-ignore
    errors.players[ARRAY_ERROR] = 'Must have at least 2 players.';
  } else if (values.players && filledPlayers.length > 4) {
    errors.players = [];
    // @ts-ignore
    errors.players[ARRAY_ERROR] = 'Cannot have more than 4 players.';
  } else {
    const dedupedNames = new Set();
    // NOTE: uses formatPlayerId because this will be the unique id used to distinguish the player
    // it removes things like spaces and special characters
    // need to check this value for dupes
    filledPlayers.forEach(p => dedupedNames.add(formatPlayerId(p.name)));
    if (dedupedNames.size !== filledPlayers.length) {
      errors.players = [];
      // @ts-ignore
      errors.players[ARRAY_ERROR] =
        'Player names must be unique. (based on lowercased, alphanumeric characters only)';
    }
  }
  return errors;
};

const validateName = (value: string) => {
  const err = required(value) || min2Char(value) || undefined;
  return err;
};

export const StartFormPlayers = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  return (
    <Form
      initialValues={{ players: [...INITIAL_PLAYERS] }}
      onSubmit={onSubmit}
      validate={validateForm}
      mutators={{
        // enable FieldArray components
        ...arrayMutators,
      }}
      render={({
        handleSubmit,
        values,
        form: {
          mutators: { push, pop },
        }, // injected from final-form-arrays above
        form,
        pristine,
        submitting,
      }) => {
        const maxPlayerInputsVisible = values?.players?.length >= 4;
        return (
          <StyledForm onSubmit={handleSubmit}>
            <StyledHeader>Players</StyledHeader>
            <div>
              <Button
                $size={ButtonSizes.SM}
                $theme={ButtonThemes.OUTLINE}
                type="button"
                onClick={() => {
                  if (!maxPlayerInputsVisible) {
                    push('players', createNewPlayer());
                  }
                }}
                disabled={maxPlayerInputsVisible}
              >
                {maxPlayerInputsVisible ? 'Max 4 Players' : 'Add Player'}
              </Button>
            </div>
            <FieldArray name="players">
              {({ fields, meta: { error } }) => (
                <StyledPlayerFields>
                  {fields.map((name, index) => (
                    <StyledPlayerInput key={name}>
                      <Field
                        component={RenderText}
                        label={`Player ${index + 1}`}
                        labelAbove
                        name={`${name}.name`}
                        validate={validateName}
                      />
                      {index > 1 && (
                        <StyledRemove onClick={() => fields.remove(index)}>
                          <span aria-label="Remove Player" role="img">
                            ❌
                          </span>
                        </StyledRemove>
                      )}
                    </StyledPlayerInput>
                  ))}
                  {typeof error === 'string' && !pristine && (
                    <StyledErrorWrapper>
                      <StyledError $center>{error}</StyledError>
                    </StyledErrorWrapper>
                  )}
                </StyledPlayerFields>
              )}
            </FieldArray>

            <Button
              $size={ButtonSizes.MD}
              $theme={ButtonThemes.FILLED}
              type="submit"
              disabled={submitting || pristine}
            >
              Let's Play!
            </Button>
          </StyledForm>
        );
      }}
    />
  );
};

export default StartFormPlayers;
