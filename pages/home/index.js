import MiniDrawer from '../../utility/drawer';

export default function Home(props) {
  const { Component } = props;
    console.log(props)
  return (
      <MiniDrawer>
          {Component}
      </MiniDrawer>
  );
}