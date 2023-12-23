import type { ReduxState } from '@/src/lib/redux'

export const selectUser = (state: ReduxState) => state.user
