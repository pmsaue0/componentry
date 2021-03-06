import React from 'react'

import { Tab } from 'componentry-lib'

export default () => (
  <div className="mb-5">
    <div className="row">
      <div className="col-12">
        <p className="lead">Nav component...</p>
        <Tab defaultActive="three">
          <Tab.Nav className="nav-justified mb-3">
            <Tab.Trigger activeId="one">Item 1</Tab.Trigger>
            <Tab.Trigger activeId="two">Item 2</Tab.Trigger>
            <Tab.Trigger activeId="three">Item 3</Tab.Trigger>
          </Tab.Nav>
          <Tab.ContentContainer>
            <Tab.Content activeId="one">Tab 1</Tab.Content>
            <Tab.Content activeId="two">Tab 2</Tab.Content>
            <Tab.Content activeId="three">Tab 3</Tab.Content>
          </Tab.ContentContainer>
        </Tab>
      </div>
    </div>
  </div>
)
