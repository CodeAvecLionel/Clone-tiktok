
        const trendingVideos = [
            { title: "Dance Challenge", views: "1.2M", likes: "356K" },
            { title: "Funny Cat", views: "890K", likes: "245K" },
            { title: "Cooking Hack", views: "2.5M", likes: "678K" },
            { title: "Makeup Look", views: "3.1M", likes: "789K" }
        ];

        const forYouVideos = [
            { title: "DIY Decor", views: "750K", likes: "198K" },
            { title: "Workout", views: "1.5M", likes: "412K" },
            { title: "Travel Vlog", views: "2.2M", likes: "567K" },
            { title: "Song Cover", views: "980K", likes: "276K" }
        ];

        const suggestedAccounts = [
            { username: "@dancequeen" },
            { username: "@cutekitty" },
            { username: "@chefsecret" },
            { username: "@makeupguru" },
            { username: "@skatemaster" }
        ];

        const trendingHashtags = [
            "#DanceChallenge", "#FunnyPets", "#CookingTips", "#BeautyHacks",
            "#FitnessMotivation", "#TravelGoals"
        ];

        function createVideoCard(video) {
            return `
            <div class="video-card">
                <img src="https://picsum.photos/200/350?random=${Math.random()}" alt="${video.title}" class="video-thumbnail">
                <div class="video-info">
                    <div class="video-title">${video.title}</div>
                    <div class="video-stats">
                        <i class="fas fa-eye"></i> ${video.views}
                        <i class="fas fa-heart" style="margin-left: 6px;"></i> ${video.likes}
                    </div>
                </div>
            </div>
        `;
        }

        function createAccountCard(account) {
            return `
            <div class="account-card">
                <img src="https://picsum.photos/50?random=${Math.random()}" alt="${account.username}" class="account-avatar">
                <div class="account-username">${account.username}</div>
            </div>
        `;
        }

        function createHashtagButton(hashtag) {
            return `<button class="hashtag">${hashtag}</button>`;
        }

        const trendingVideosContainer = document.querySelector('.trending-videos');
        trendingVideos.forEach(video => {
            trendingVideosContainer.innerHTML += createVideoCard(video);
        });

        const forYouVideosContainer = document.querySelector('.for-you-videos');
        forYouVideos.forEach(video => {
            forYouVideosContainer.innerHTML += createVideoCard(video);
        });

        const suggestedAccountsContainer = document.querySelector('.suggested-accounts');
        suggestedAccounts.forEach(account => {
            suggestedAccountsContainer.innerHTML += createAccountCard(account);
        });

        const trendingHashtagsContainer = document.querySelector('.trending-hashtags');
        trendingHashtags.forEach(hashtag => {
            trendingHashtagsContainer.innerHTML += createHashtagButton(hashtag);
        });

        // Add active class to bottom nav buttons
        const navButtons = document.querySelectorAll('.nav-button');
        navButtons.forEach(button => {
            button.addEventListener('click', function () {
                navButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Add hover effects
        document.querySelectorAll('.video-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'scale(1.05)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1)';
            });
        });

        document.querySelectorAll('.account-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'scale(1.1)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1)';
            });
        });

        document.querySelectorAll('.hashtag').forEach(hashtag => {
            hashtag.addEventListener('mouseenter', () => {
                hashtag.style.backgroundColor = '#E1E1E2';
            });
            hashtag.addEventListener('mouseleave', () => {
                hashtag.style.backgroundColor = '#F1F1F2';
            });
        });
