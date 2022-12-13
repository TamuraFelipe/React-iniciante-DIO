import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #fff;
    padding: 2px 12px;
    min-width: 124px;
    width: 100%;

    cursor: pointer;

    transition: opacity .7s;

    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        
        background: #e4105d;
        
        &:hover {
            opacity: 0.6;
        }

        &::after {
            content: "";
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
    ${({variant}) => variant === "disabled" && css`
        min-width: 167px;
        height: 33px;
        
        background: rgb(86, 86, 86);;
        
        &:hover {
            opacity: 0.6;
        }

        &::after {
            content: "";
            position: absolute;
            border: 1px solid rgb(86, 86, 86);;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`