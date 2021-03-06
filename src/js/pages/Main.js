import React from 'react';
import { Page, Tabbar, Tab } from 'react-onsenui';

import Dude from './Dude';
import Collection from './Collection';
import Egg from './Egg';
import Settings from './Settings';

class Main extends React.Component {
  renderTabs = () => {
    const sections = [
      {
        content: <Dude key="Dude" title="Dude" navigator={this.props.navigator} />,
        title: 'Dude',
        icon: 'md-info'
      },
      {
        content: <Collection key="Collection" title="Collection" navigator={this.props.navigator} />,
        title: 'Collection',
        icon: 'md-link'
      },
      {
        content: <Egg key="Egg" title="Egg" navigator={this.props.navigator} />,
        title: 'Egg',
        icon: 'md-info'
      },
      {
        content: <Settings key="Settings" title="Settings" navigator={this.props.navigator} />,
        title: 'Settings',
        icon: 'md-settings'
      }
    ];

    return sections.map((section) => ({
      content: section.content,
      tab: <Tab key={section.title} label={section.title} icon={section.icon} />
    }));
  }

  render() {
    return (
      <Page>
        <Tabbar
          initialIndex={0}
          renderTabs={this.renderTabs}
        />
      </Page>
    );
  }
}

export default Main;
