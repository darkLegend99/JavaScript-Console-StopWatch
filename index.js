function Stopwatch() {
    let startTime,endTime,running,duration=0;

    this.start = function() {
        if(running)
            throw new Error('The StopWatch is already running!!');
        running = true;
        startTime = new Date();
    };

    this.stop = function() {
        if(!running)
            throw new Error('The StopWatch is not running. First start the stopWatch.');
        running = false;
        endTime = new Date();

        duration = (endTime.getTime() - startTime.getTime())/1000;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }   
    });
}

