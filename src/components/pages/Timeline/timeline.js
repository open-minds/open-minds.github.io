import React from 'react';
import { Timeline, Icon } from 'antd';
import { StyledItem, TimelineContainer } from './styles';

export default function TimelineComponent() {
  return (
    <TimelineContainer>
      <Timeline mode="alternate">
        <StyledItem dot={<Icon type="rocket" />}>Initial commit</StyledItem>
        <StyledItem color="green">Getting Started with Linux</StyledItem>
        <StyledItem dot={<Icon type="github" />} color="black">
          Created{' '}
          <a href="https://github.com/open-minds/awesome-openminds-team" target="_blank" rel="noopener noreferrer">
            Awesome Team Open Minds
          </a>
        </StyledItem>
        <StyledItem color="green" dot={<p>2018</p>} />
        <StyledItem color="red">OpenTalks 1.0</StyledItem>
        <StyledItem color="green" dot={<p>2019</p>} />
        <StyledItem color="orange" dot={<Icon type="cluster" />}>
          OpenHackathon 1.0
        </StyledItem>
      </Timeline>
    </TimelineContainer>
  );
}
