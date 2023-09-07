import { Grid, GridItem, Show } from '@chakra-ui/react';
import GenreList from './components/GenreList';
import GameGrid from './components/GameGrid';
import NavBar from './components/NavBar';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
