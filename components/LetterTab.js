import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LetterTab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.string.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = 'tab-list-item';

        if (activeTab === label) {
            className += ' tab-list-active';
        }

        return (
            <li
                className={className}
                onClick={onClick}
            >
                {label}
                <style jsx>
                    {`
                        .tab-list {
                        border-bottom: 1px solid #ccc;
                        padding-left: 0;
                    }
                    
                    .tab-list-item {
                        display: inline-block;
                        list-style: none;
                        margin-bottom: -1px;
                        padding: 0.5rem 0.75rem;
                    }
                    
                    .tab-list-active {
                        background-color: white;
                        border: solid #ccc;
                        border-width: 1px 1px 0 1px;}
                    `}
                </style>
            </li>
        );
    }
}

export default LetterTab;