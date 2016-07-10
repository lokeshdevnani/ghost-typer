# ghost-typer.js
Jquery Plugin for simulating typing automatically

## How to use
Ghost-typer have the defaults set to values which you would normally prefer. But, you can customize a lot of things if you want more control such as speed control, pause timings, repetitions & custom callbacks.

### Basic Usage

Include Jquery in your document. Ghost-typer.js supports all versions of jquery.
```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
```
Include ghost-typer.js after including Jquery
```
<script src="ghost-typer.min.js"></script>
```
Choose any div or span you want to target for typing simulation using jquery and apply the plugin by `selector.ghosttyper()`
```
$("#typing").ghosttyper({
    messages: ['anything', 'you want', 'it to','type']
});
```
Here, `"#typing"` is the container for simulation which can be a `span` or a `div`.
And `messages` is an option through which we will pass the text we want it to simulate the typing.

**Note**: `messages` is an array of text which will be displayed one at a time and is the only option which is mandatory.

### Advanced Usage
There are a couple of options which can be altered by passing an options object.

```
$("#typing").ghosttyper(options);
```
```
$("#typing").ghosttyper({
    messages: ['web development', '<coding>', 'dancing','technology'],
    timeWrite: 50,  //time between each chracter
    timeDelete: 30, //time between each chracter
    timePause: 800, //time between each chracter
    repeat: false,  //loop it indefinitely
    callback: function() {
        console.log('called when the entire array of messages has been completed.');
    }
});
```
All the above options is optional & can be left off.
**Note**: The callback will only be called after completion of entire process. Thus, will never be called if repeat is set to true.
