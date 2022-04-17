import styled from "styled-components"

interface ContainerProps {
  openMenu: boolean
}
export const Container = styled.header(
  ({ openMenu }: ContainerProps) => `
background: #d2d7d8;
width: 100vw;
display: flex;
align-items: center;
padding-inline: 100px;

align-items: center;
justify-content: space-between;

nav a {
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 15px 10px;
  :hover {
    backdrop-filter: brightness(0.9);
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
  margin-inline: 15px;
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
  :hover .account-modal {
    display: flex;
  }
}

.account-modal {
  cursor: default;
  border-radius: 5px;
  display: none;
  flex-direction: column;
  background: #ffffff;
  border: solid 0.4px black;
  position: absolute;
  right: 0;
  white-space: pre;
  padding-block: 10px;
  z-index: 100;
  font-size: 1.2rem;
  top: 40px;
  span {
    border-block: solid 0.5px rgba(0, 0, 0, 0.5);
    text-align: center;
    padding-block: 5px;
    margin-inline: 5px;
  }
  a {
    padding: 5px 20px;
    color: black;
    text-decoration: none;
    font-size: 1.1rem;
    text-align: center;
    :hover {
      backdrop-filter: brightness(0.9);
    }
  }
}
.menu-bar {
  cursor: pointer;
  padding: 20px;
  position: relative;
  display: none;
}

/* Media querys */
@media (max-width: 1050px) {
  .search-box {
    margin: 10px;
  }
   {
    padding-inline: 50px;
  }
}
@media (max-width: 800px) {
  nav a {
    font-size: 1.3em;
  }
   {
    padding-inline: 30px;
    font-size: 0.85em;
  }
}
@media (max-width: 720px) {
   {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    padding: 0 10px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .search-box {
    order: 2;
    width: 100%;
    margin: 20px 0;
    flex: 0;
    grid-column: 1/4;
    display: ${openMenu ? "flex" : "none"};

    input {
      padding: 8px;
    }
  }
  nav {
    width: 100%;
    order: 3;
    height: 100vh;
    grid-column: 1/4;
    display:${openMenu ? "flex" : "none"};
    flex-direction: column;
    a {
      text-align: center;
      width: 100%;
    }
  }
  .account-container {
    order: 1;
    margin-right: 20px;
    align-self: flex-end;
    grid-column: 3/4;
    justify-content: center;
  }
  .subtotal-container {
    order: 2;
    grid-column: 2/3;
  }
  .account-modal {
    
    height: 100vh;
    width: 100vw;
  }
  .menu-bar {
    display: block;
  }
}
`
)

interface MenuHambProps {
  active?: boolean
}
export const MenuHamb = styled.div.attrs(() => ({
  role: "menubar",
}))`
  width: 35px;
  height: 4px;
  background: black;
  position: relative;
  ${(props: MenuHambProps) => props.active && "transform: rotate(45deg);"}
  transition: 0.3s;
  :before {
    ${(props: MenuHambProps) => props.active && "opacity:0;"}
    content: "";
    position: absolute;
    transition: 0.3s;
    top: 8px;
    display: block;
    width: 35px;
    height: 4px;
    background: black;
  }
  :after {
    content: "";
    transition: 0.3s;
    position: absolute;
    bottom: 8px;
    display: block;
    ${(props: MenuHambProps) =>
      props.active && "transform: rotate(90deg) translatex(8px);"}
    width: 35px;
    height: 4px;
    background: black;
  }
`
