import styled from "styled-components"

export const Container = styled.header`
  background: #d2d7d8;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 100px;
  a {
    color: black;
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 15px 10px;
    :hover {
      background: #c2c6c7;
    }
  }
  nav {
    display: flex;
    align-items: center;
  }
  .active {
    border-bottom: solid 3px #51e7f6;
  }
  .subtotal-container {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 5px;
    transition: 0.2s;
    :hover {
      -webkit-text-stroke: 0.2px black;
      color: #51e7f6;
    }
  }
  .search-box {
    flex: 1;
    margin: 10px 50px;
    display: flex;
    img {
      margin-inline: 15px;
      cursor: pointer;
    }
    input {
      width: 100%;
      border: none;
      outline: none;
      padding: 5px;
      font-size: 1.02rem;
    }
  }
  .account-container {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
  }
  .account-container:hover .account-modal {
    display: flex;
  }
  .account-modal {
    cursor: default;
    border-radius: 5px;
    display: none;
    flex-direction: column;
    background: #ffffff;
    padding: 20px;
    gap: 20px;
    border: solid 0.4px black;
    position: absolute;
    left: 0;
    z-index: 100;
    top: 40px;
  }
`

interface MenuBar {
  active?: boolean
}
export const MenuBar = styled.div.attrs(() => ({
  role: "menubar",
}))`
  width: 35px;
  height: 4px;
  background: black;
  position: relative;
  ${(props: MenuBar) => props.active && "transform: rotate(45deg);"}
  transition: 0.7s;
  :before {
    ${(props: MenuBar) => props.active && "opacity:0;"}
    content: "";
    position: absolute;
    transition: 0.7s;
    top: 5px;
    display: block;
    width: 35px;
    height: 4px;
    background: black;
  }
  :after {
    content: "";
    transition: 0.7s;
    position: absolute;
    bottom: 5px;
    display: block;
    ${(props: MenuBar) =>
      props.active && "transform: rotate(90deg) translatex(5px);"}
    width: 35px;
    height: 4px;
    background: black;
  }
`
