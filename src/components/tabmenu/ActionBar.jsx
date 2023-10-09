import React from 'react';
import { Button } from 'primereact/button';
import PropTypes from 'prop-types';

const ActionBar = ({ actionButtons }) => {
    return (
        <div className="other-actions">
            {actionButtons.map((button, index) => (
                <Button
                    size="small"
                    key={index}
                    label={button.label}
                    icon={button.icon}
                    onClick={button.actionHandler}
                />
            ))}
        </div>
    );
};

ActionBar.propTypes = {
    actionButtons: PropTypes.array.isRequired,
};

export default ActionBar;
