let taskRunOnceTimestamp: { [key: string]: any } = {};

class TimeHelper {
	state = {
		runOnceInTimestamp: 0,
	}

	waitDelay = (miliseconds: number) => new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, miliseconds);
	});

	runOnceIn = (id = 'null', miliseconds: number) => (func: any) => {
		let newTimestamp = new Date().getTime();
		if (!taskRunOnceTimestamp[id] || newTimestamp - taskRunOnceTimestamp[id] > miliseconds) {
			taskRunOnceTimestamp[id] = newTimestamp;
			if (typeof func === 'function') return func();
		}
	}
}

export default new TimeHelper();
