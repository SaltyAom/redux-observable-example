import { debounceTime, mapTo, map } from "rxjs/operators"
import { ofType, combineEpics } from "redux-observable"

const pingEpic = action$ =>
	action$.pipe(
		ofType("PING"),
		debounceTime(1000),
		mapTo({ type: "PONG" })
	)

const updateEpic = action$ =>
	action$.pipe(
		ofType("UPDATE_EPIC"),
		debounceTime(350),
		map(action => ({
			type: "UPDATE",
			payload: { counter: action.payload.counter }
		}))
	)

const rootEpic = combineEpics(pingEpic, updateEpic)

export default rootEpic