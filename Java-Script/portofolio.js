const exampleText = ['Developer', 'Designer', 'Engineer', 'Analyst','Freelancer'];
    const exampleTyping = new AutoTyping('.selector', exampleText, {
        typeSpeed: 100,
        deleteSpeed: 50,
        waitBeforeDelete: 2000,
        waitBetweenWords: 100,
    });
    exampleTyping.start()