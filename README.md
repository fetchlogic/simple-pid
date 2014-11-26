# simple-pid

Stupid simple PID management.

## Why another PID module?

I know, there’s already quite a few other PID modules out there but for me they
all seemed to fall into the poorly documented or the overly complex categories.
I just wanted a way to see if a process was already running and if not, run
the damn code. I also wanted to do this in a very simple fashion, by way of a
callback. And thus, I give you `simple-pid`.

## Usage

```javascript
var pid = require('simple-pid');

pid.lock('process-name', function() {
  // All your awesome logic
});
```

## But what’s it do?

Great question! All it does is checks to see if a PID file was already created,
based on the passed process name. If the PID inside of the PID file is still
active, the callback is not executed. If it isn’t running (or the PID file
simply doesn't exist) the PID file will be created (with the current PID) and
the code in the callback will be executed.

## Any gotchas?

You know it! Because this module writes to the `/var/run` directory it requires
write access to that directory. This is best accomplished by running your script
as root or by way of `sudo`.
