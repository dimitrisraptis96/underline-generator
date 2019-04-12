import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "react-tooltip-lite";

import Card from "./Card";
import CopyIcon from "./CopyIcon";

import { neutral } from "../../utils/theme";

const StyledTooltip = styled(Tooltip)`
  > span {
    border-radius: 8px !important;
    font-size: 12px;
    font-weight: normal;
    font-family: "Prompt", sans-serif;
  }
`;

const CopyButton = ({ cssCode, baseColor, grow }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledTooltip
      arrowSize={8}
      arrow={false}
      distance={8}
      background={neutral[500]}
      color={neutral[100]}
      content={"Copied!"}
      direction="right"
      isOpen={isOpen}
    >
      <CopyToClipboard text={cssCode}>
        <Card
          width={30}
          height={60}
          onClick={() => {
            setIsOpen(true);
            setTimeout(() => setIsOpen(false), 2000);
            /* Copy to clipboard here and open 'Copied!' popover.*/
          }}
        >
          <CopyIcon size={30} fill={baseColor} />
        </Card>
      </CopyToClipboard>
    </StyledTooltip>
  );
};

CopyButton.propTypes = {
  onClick: PropTypes.func,
};

CopyButton.defaultProps = {
  onClick: () => {},
};

export default CopyButton;
