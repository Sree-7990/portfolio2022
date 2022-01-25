import React, { useState, useEffect } from "react";
import styled from "styled-components";
import grid from "../img/icons/grid.png";
import { Animated } from "react-animated-css";

const ComponentContainer = styled.div`
  min-width: 400px;
  width: 26%;
  margin-right: 60px;
  height: max-content;

  @media (max-width: 655px) {
    width: max-content;
    min-width: 10px;
    display: flex;
    align-items: center;
  }
`;

// border-bottom-color:${(props) =>
//     props.selected ? "#000" : "#fff"};

const MenuItem = styled.div`
  color: ${(props) => props.theme.secondary};
  font-family: "Caveat", cursive;
  font-family: "Kanit", sans-serif;
  font-size: 14px;
  padding: 5px;
  margin: 10px;
  cursor: pointer;
  white-space: nowrap;
`;

const SelectorLine = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2px;
  border-radius: 10px;
  margin: -10px 12px;

  background-color: ${(props) => props.theme.primary};
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px;

  @media (max-width: 655px) {
    display: none;
  }
`;

const ExpandedMenu = styled.div`
  width: 0px;
  overflow: hidden;
  @media (max-width: 655px) {
    position: absolute;
    height: ${(props) => (props.expanded ? "max-content" : "0")};
    display: block;
    right: 0px;
    top: 65px;
    width: 100%;
    background-color: white;
    padding: 30px 50px;
    z-index: 10;
    transition: all 0.5s;
  }
`;

const MenuButton = styled.img`
  display: none;

  @media (max-width: 655px) {
    cursor: pointer;
    width: 25px;
    display: flex;
    justify-content: flex-end;
  }
`;

const MenuBar = (props) => {
  const menuItems = [
    { name: "Home", id: 1, key: "home" },
    { name: "Skills", id: 2, key: "skill" },
    { name: "Work", id: 3, key: "work" },
    { name: "Education", id: 4, key: "edu" },
    { name: "Contact Me", id: 5, key: "home" },
  ];
  const [menuList, setMenuList] = useState([]);
  const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState(menuItems[0]);

  useEffect(() => {
    setMenuList(menuItems);
  }, []);
  const menuItemClick = (item) => {
    setSelected(item);
    console.log("selecting : ", item);
  };
  return (
    <ComponentContainer>
      <MenuButton onClick={() => setExpand(!expand)} src={grid}></MenuButton>
      {expand && (
        <ExpandedMenu expanded={expand}>
          {menuList?.length > 0 &&
            menuList.map((menuItem) => (
              <div key={menuItem.id} style={{ height: 40 }}>
                <MenuItem
                  onClick={() => {
                    menuItemClick(menuItem);
                    props.scrollTo(menuItem.key);
                  }}
                >
                  {menuItem?.name}
                </MenuItem>
                {selected?.id === menuItem.id && (
                  <Animated
                    animationIn="fadeInLeft"
                    animationInDuration={100}
                    isVisible={true}
                  >
                    <SelectorLine />
                  </Animated>
                )}
              </div>
            ))}
        </ExpandedMenu>
      )}
      <MenuContainer data-aos-duration="1000" data-aos="fade-left">
        {menuList?.length > 0 &&
          menuList.map((menuItem) => (
            <div key={menuItem.id}>
              <MenuItem
                onClick={() => {
                  menuItemClick(menuItem);
                  props.scrollTo(menuItem.key);
                }}
              >
                {menuItem?.name}
              </MenuItem>
              {selected?.id === menuItem.id && (
                <Animated
                  animationIn="fadeInLeft"
                  animationInDuration={100}
                  isVisible={true}
                >
                  <SelectorLine />
                </Animated>
              )}
            </div>
          ))}
      </MenuContainer>
    </ComponentContainer>
  );
};

export default MenuBar;
