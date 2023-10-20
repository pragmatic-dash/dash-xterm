import React, {useEffect, useState, useRef} from 'react';
import {XTerm} from 'xterm-for-react';
import {FitAddon} from 'xterm-addon-fit';
import faker from "faker";

// import "../node_modules/xterm/css/xterm.css";
import PropTypes from 'prop-types';

import {useInterval} from "../useInterval";

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

function generateRandomLog() {
    return faker.lorem.paragraph();
}

const fitAddon = new FitAddon();
const DashXterm = (props) => {
    const {id, label, setProps, value} = props;
    const [logInterval, setLogInterval] = useState(1000);
    const [isPaused, setPaused] = useState(false);

    const xtermRef = React.useRef(null);
    useEffect(() => {
        // fitAddon.fit();
        xtermRef.current.terminal.writeln("Hello, World!")

    }, [])

    function writeLog(line) {
        while (line) {
            const index = line.indexOf('\n');
            if (index > -1) {
                xtermRef.current.terminal.writeln(line.substring(0, index));
                line = line.substring(index + 1);
            } else {
                xtermRef.current.terminal.write(line);
                line = '';
            }
        }
    }

    useInterval(() => {
        if (isPaused) {
            return
        };
        writeLog(generateRandomLog());
    }, logInterval);

    return (
        <div id={id}>
            <div>
                <button
                    id="log-toggle"
                    onClick={e => setPaused(t => !t)}
                >{isPaused ? "start logs" : "pause logs"}</button>
            </div>
            <div className="main">
                <XTerm ref={xtermRef} addons={[fitAddon]}/>
            </div>
        </div>
    );
}

DashXterm.defaultProps = {};

DashXterm.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default DashXterm;
