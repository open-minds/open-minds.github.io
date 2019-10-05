import React from 'react';
import { Icon } from 'antd';
import TimeLine from './timeline';
import { SectionHeader } from './styles';

export default function TimelinePage() {
  return (
    <div>
      <SectionHeader>
        <p>
          This is our story so far <Icon type="smile" /> (<Icon type="pull-request" /> Contribution/Collaboration,{' '}
          <Icon type="code" /> Code workshop, <Icon type="github" /> An open source project, <Icon type="cluster" />{' '}
          Hackathon)
        </p>
      </SectionHeader>
      <TimeLine />
    </div>
  );
}
