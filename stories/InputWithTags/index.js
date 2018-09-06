import React from 'react';
import {storiesOf} from '@storybook/react';
import TabbedView from 'wix-storybook-utils/TabbedView';
import InputWithTags from '../../src/MultiSelect/InputWithTags';

const tags = [
  {
    id: 'Alabama',
    label: 'Alabama'
  }, {
    id: 'California',
    label: 'California'
  },
  {
    id: 'New York',
    label: 'New York'
  }
];

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags
    };
  }

  render() {
    const {tags} = this.state;
    return (
      <InputWithTags
        draggable
        tags={tags}
        onReorder={({removedIndex, addedIndex}) => {
          const placeholder = tags[removedIndex];
          tags[removedIndex] = tags[addedIndex];
          tags[addedIndex] = placeholder;
          this.setState({
            tags
          });
        }}
        />
    );
  }
}

storiesOf('4. Selection', module)
  .add('4.1 + InputWithTags', () => (
    <TabbedView tabs={['API', 'Testkit']}>
      <div>
        <Example/>
      </div>
    </TabbedView>
  ));
