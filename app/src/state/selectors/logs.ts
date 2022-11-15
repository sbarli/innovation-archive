import { RootState } from '../../store';

export const selectGameLogs = (state: RootState) => state.log.logs;
