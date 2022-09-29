import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/voodoochilee16/design-history-society.git', // Update to point to your repository
        user: {
            name: 'Paulo Ferreira', // update to use your name
            email: 'paulo.carvalhoferreira@protonmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);