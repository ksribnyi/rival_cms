const CreateTime = (timeCreate : number) => {
    const timeNow = Date.now() / 1000
    const time = Math.round(timeNow - timeCreate)
    if (time < 60) {
        if ((time / 60) < 2) {
            return `${time} second`
        } else {
            return `${time} seconds`
        }
    }
    if (time < 3600) {
        if ((time / 60) < 2) {
            return `${Math.round(time / 60)} minute`
        } else {
            return `${Math.round(time / 60)} minutes`
        }
    }
    if (time < 3600 * 24) {
        if ((time / 3600) < 2) {
            return `${Math.round(time / (3600))} hour`
        } else {
            return `${Math.round(time / (3600))} hours`
        }
    }
    if (time < 3600 * 24 * 7) {
        if ((time / (3600 * 24)) < 2) {
            return `${Math.round(time / (3600 * 24))} day`
        } else {
            return `${Math.round(time / (3600 * 24))} days`
        }
    }
    if (time < 3600 * 24 * 30) {
        if ((time / (3600 * 24 * 7)) < 2) {
            return `${Math.round(time / (3600 * 24 * 7))} week`
        } else {
            return `${Math.round(time / (3600 * 24 * 7))} weeks`
        }
    }
    if (time < 3600 * 24 * 30 * 12) {
        if ((time / (3600 * 24 * 30)) < 2) {
            return `${Math.round(time / (3600 * 24 * 30))} month`
        } else {
            return `${Math.round(time / (3600 * 24 * 30))} months`
        }
    }
    if (time > 3600 * 24 * 30 * 12 * 365) {
        if ((time / (3600 * 24 * 30 * 12)) < 2) {
            return `${Math.round(time / (3600 * 24 * 30 * 12))} year`
        } else {
            return `${Math.round(time / (3600 * 24 * 30 * 12))} years`
        }
    }
}

export default CreateTime