import React from 'react';
import { compose, withHandlers, pure } from 'recompose';
import './styles.css';

const Tabs = (props) => {
  const { handleTabClick, tabStatus } = props;
  return (
    <div className="tabs-wrapper">
      <div role="presentation" onClick={handleTabClick} id="tabs-all" className={tabStatus === 'all' ? 'tab-active' : 'tab-default'}>All</div>
      <div role="presentation" onClick={handleTabClick} id="tabs-active" className={tabStatus === 'active' ? 'tab-active' : 'tab-default'}>Active</div>
      <div role="presentation" onClick={handleTabClick} id="tabs-completed" className={tabStatus === 'completed' ? 'tab-active' : 'tab-default'}>Completed</div>
    </div>
  );
}
export default compose(
  pure,
  withHandlers({
    handleTabClick: ({ tabClick }) => (value) => {

      switch (value.target.id) {
        case 'tabs-active':
          tabClick('active');
          break;

        case 'tabs-completed':
          tabClick('completed');
          break;

        default:
          tabClick('all');
          break;
      }
    },
  })
)(Tabs);
