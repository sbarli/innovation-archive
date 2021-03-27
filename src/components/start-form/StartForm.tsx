import { ARRAY_ERROR } from 'final-form';
import arrayMutators from 'final-form-arrays';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import styled from 'styled-components/macro';

import RenderText from '../../libs/forms/fields/RenderText/RenderText';
import { minChar, required } from '../../libs/forms/utils/validation';

const StyledPlayerInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
`;

const StyledRemove = styled.div`
  font-size: 1.2rem;
  margin-left: 8px;
`;

const StyledError = styled.div`
  color: red;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
`;

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
    filledPlayers.forEach(p => dedupedNames.add(p.name));
    if (dedupedNames.size !== filledPlayers.length) {
      errors.players = [];
      // @ts-ignore
      errors.players[ARRAY_ERROR] = 'Player names must be unique.';
    }
  }
  return errors;
};

const validateName = (value: string) => {
  const err = required(value) || min2Char(value) || undefined;
  return err;
};

export const StartForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
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
        return (
          <form onSubmit={handleSubmit}>
            <h2>Setup your game</h2>
            <div>
              <button
                type="button"
                onClick={() => {
                  if (!values.players || values.players.length < 4) {
                    push('players', createNewPlayer());
                  }
                }}
              >
                Add Player
              </button>
            </div>
            <FieldArray name="players">
              {({ fields, meta: { error } }) => (
                <div>
                  {fields.map((name, index) => (
                    <StyledPlayerInput key={name}>
                      <Field
                        name={`${name}.name`}
                        label={`Player ${index + 1}`}
                        component={RenderText}
                        validate={validateName}
                      />
                      {index > 1 && (
                        <StyledRemove
                          onClick={() => fields.remove(index)}
                          style={{ cursor: 'pointer' }}
                        >
                          <span aria-label="Remove Player" role="img">
                            ❌
                          </span>
                        </StyledRemove>
                      )}
                    </StyledPlayerInput>
                  ))}
                  {typeof error === 'string' && !pristine && <StyledError>{error}</StyledError>}
                </div>
              )}
            </FieldArray>

            <button type="submit" disabled={submitting || pristine}>
              Let's Play!
            </button>
          </form>
        );
      }}
    />
  );
};

export default StartForm;
