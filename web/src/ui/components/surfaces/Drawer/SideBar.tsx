import { DrawerContainer, ItemListTitle } from "./SideBar.style";
import { ItemList } from "./TemporaryDrawer";

const SideBar: React.FC = () => {
  return (
    <>
      <DrawerContainer>
        <ul>
          {ItemList.map((item) => {
            return (
              <>
                <li>
                  {item.icon}
                  <ItemListTitle>{item.name}</ItemListTitle>
                </li>
              </>
            );
          })}
        </ul>
      </DrawerContainer>
    </>
  );
};

export default SideBar;
