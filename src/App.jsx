import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {Tabs} from './components/Tabs';

export const App = () => {
  const [activeTab, setActive] = useState('tab-1');

  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const handleTabClick = id => {
    if (id !== activeTab) {
      setActive(id);
    }
  };

  const activeTabContent = tabs.find(arr => arr.id === activeTab).content;

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {tabs.find(arr => arr.id === activeTab).title}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(item => {
              return (
                <li
                  className={activeTab === item.id ? 'is-active' : ''}
                  key={item.id}
                  data-cy="Tab"
                >
                  <a
                    href={`#${item.id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      handleTabClick(item.id);
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <Tabs activeTabContent={activeTabContent} />
      </div>
    </div>
  );
};
