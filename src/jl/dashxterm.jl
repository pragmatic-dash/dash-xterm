# AUTO GENERATED FILE - DO NOT EDIT

export dashxterm

"""
    dashxterm(;kwargs...)

A DashXterm component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `label` (String; required): A label that will be printed when this component is rendered.
- `value` (String; optional): The value displayed in the input.
"""
function dashxterm(; kwargs...)
        available_props = Symbol[:id, :label, :value]
        wild_props = Symbol[]
        return Component("dashxterm", "DashXterm", "dash_xterm", available_props, wild_props; kwargs...)
end

