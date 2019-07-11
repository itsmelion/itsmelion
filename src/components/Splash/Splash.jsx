import React, { memo } from 'react';

const Splash = () => (
  <aside className="suspense-loading-bg" style={{ opacity: 1 }}>
    <h1>
      Loading...
      <br />
      Carregando
    </h1>
  </aside>
);

export default memo(Splash);
