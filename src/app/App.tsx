import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="Loading">
        <Navbar />
        <button onClick={() => setIsOpen(true)}>Открыть модалку</button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        // eslint-disable-next-line i18next/no-literal-string
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis vel iste, eaque omnis aliquam minima voluptas velit accusantium repudiandae sit perferendis quis consectetur. Nihil pariatur distinctio nemo alias vitae qui!
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
