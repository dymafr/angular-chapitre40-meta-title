const metaData: MetaData = {
  '/home': {
    title: 'Ma homepage',
    metas: {
      description: 'je decris ma homepage',
      'og:title': 'je suis un ogtitle dans homepage',
    },
  },
  '/pricing': {
    title: 'Mon pricing',
    metas: {
      description: 'je decris mon pricing',
      'og:title': 'je suis ogtitle dans pricing',
    },
  },
};

interface MetaData {
  [chemin: string]: {
    title: string;
    metas: { description: string; 'og:title': string };
  };
}

export default metaData;
