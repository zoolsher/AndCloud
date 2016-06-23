import React from 'react';
import {
  Container,
  Group,
  NavBar,
  amStyles,
  OffCanvas,
  OffCanvasTrigger,
} from 'amazeui-touch';


const clickHandler = (item, e) => {
  e.preventDefault();
  alert(item);
};

const itemLeft = {
  href: '#',
  title: 'Left'
};

const itemRight = {
  href: '#',
  title: 'Right'
};

const dataAll = {
  title: 'Navbar',
  leftNav: [{...itemLeft, icon: 'left-nav'}],
  rightNav: [{...itemRight, icon: 'right-nav'}],
  onAction: clickHandler,
};

const dataLeft = {
  title: 'Navbar',
  leftNav: [{...itemLeft, icon: 'left-nav'}],
  onAction: clickHandler,
};

const dataRight = {
  title: 'Navbar',
  rightNav: [itemRight, itemRight],
  onAction: clickHandler,
};

var withOffCanvas = {
  title: 'With OffCanvas',
  rightNav: [{
    icon: 'bars',
    title: 'Menu',
    component: OffCanvasTrigger,
    isClone: true, // IMPORTANT
    offCanvas: <OffCanvas><p>OffCanvas 内容</p></OffCanvas>,
  }],
};

const NavBarExample = React.createClass({
  renderStyles(style, index) {
    return (
      <div key={index}>
        <NavBar
          {...dataAll}
          amStyle={style.toLowerCase()}
        />
        <br />
      </div>
    );
  },

  render() {
    return (
      <Container {...this.props}>

        <Group header="图标">
          <NavBar {...dataLeft} rightNav={[{icon: 'bars'}]} />
        </Group>


        <Group header="With OffCanvas">
          <NavBar
            {...withOffCanvas}
            amStyle="primary"
          />
        </Group>
      </Container>
    );
  }
});

export default NavBarExample;
