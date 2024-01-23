import React, { useContext } from 'react';

import AppRouter from './router/AppRouter';
import { addClassNames } from './utils/addClassNames/addClassNames';
import { ThemeContext } from './providers/ThemeProvider/ui/ThemeProvider';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={addClassNames('app', {}, [theme])}>
      <div className="page-content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
