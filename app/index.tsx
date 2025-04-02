import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes';
import MenuItem from '@/presentation/menu/MenuItem';
import ThemedView from '@/presentation/shared/ThemedView';
import { View, ScrollView } from 'react-native';

const ComponentsApp = () => {
  return (
    <ScrollView>
      <ThemedView margin>
        {animationMenuRoutes.map((route, index) => 
          // <Link 
          //   key={route.name}
          //   href={route.name.split("/")[0] as Href}
          //   // se quita la pleca debido a que en el archivo Routes se tienen las rutas
          // >
          //   <ThemedText>{route.title}</ThemedText>
          // </Link>
          <MenuItem 
            key={route.title}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === animationMenuRoutes.length - 1}
          />
        )}
        <View
          style={{
            height: 20
          }}
        />
        {uiMenuRoutes.map((route, index) => 
          <MenuItem 
            key={route.title}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === uiMenuRoutes.length - 1}
          />
        )}
        <View
          style={{
            height: 20
          }}
        />
        {menuRoutes.map((route, index) => 
          <MenuItem 
            key={route.title}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === menuRoutes.length - 1}
          />
        )}
      </ThemedView>
    </ScrollView>
  );
};
export default ComponentsApp;
