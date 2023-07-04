import Text from './componentes/StyledText/index.js';
import Button from './componentes/AlertButton/button.js';

function App(){
    return(
        <>
          <Text p="Texto a ser estilizado" color="#0ffff8"/>
          <Button label="Baixar CV"/>
        </>
    )
};

export default App;