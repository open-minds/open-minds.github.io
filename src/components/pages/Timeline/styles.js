import styled from 'styled-components';
import { Timeline } from 'antd';

const { Item } = Timeline;

const SectionHeader = styled.div``;

const StyledItem = styled(Item)`
  font-size: 16px;
`;

const TimelineContainer = styled.div`
  overflow: hidden;
`;

export { SectionHeader, StyledItem, TimelineContainer };
