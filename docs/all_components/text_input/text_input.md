# Text-input
A text-input component enables sending textual inputs to downstream components. The component consists of a text field that accepts _template variables_ (e.g., `\{template variable\}`). The provided values will represent the output of the component. If the input is a template the template variables will be replaced by their values at the output.

## Inputs
As mentioned above, the input consist of a text field that accepts _template variables_.

| input name | input data type | example value   | description |
| Input      | text            | "Hello \{name\}!" or "Hello Alex!" | The value can be a simple text or a _templated text_ where the template variable will be filled in as part of a different input|

## Output

The component will output a text - the input value, with the template variables replaced in the text when they exist.

## Configuration
There is no configuration necessary for this component.

## Example

See [Lunar](https://lunar.lunarbase.ai) for an example of how to use this component in a workflow and much more.
