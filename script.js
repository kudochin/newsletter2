document.addEventListener('DOMContentLoaded', function() {
    // 各セクションにdata-aos属性を追加
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (!section.hasAttribute('data-aos')) {
            section.setAttribute('data-aos', 'fade-up');
            section.setAttribute('data-aos-duration', '1000');
        }
    });

    // ヒーローセクションの要素にアニメーションを追加
    const heroTitle = document.querySelector('#hero h2');
    if (heroTitle) {
        heroTitle.setAttribute('data-aos', 'fade-down');
        heroTitle.setAttribute('data-aos-duration', '1000');
    }

    const problemList = document.querySelector('.problem-list');
    if (problemList) {
        problemList.setAttribute('data-aos', 'fade-right');
        problemList.setAttribute('data-aos-duration', '1000');
        problemList.setAttribute('data-aos-delay', '200');
    }

    const heroParagraphs = document.querySelectorAll('#hero p:not(.problem-list)');
    heroParagraphs.forEach((p, index) => {
        p.setAttribute('data-aos', 'fade-up');
        p.setAttribute('data-aos-duration', '1000');
        p.setAttribute('data-aos-delay', `${400 + index * 100}`);
    });

    // CTAボタンにアニメーションを追加
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.setAttribute('data-aos', 'zoom-in');
        ctaButton.setAttribute('data-aos-duration', '1000');
        ctaButton.setAttribute('data-aos-delay', '600');
    }

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // すべてのdata-aos属性が設定された後にAOSを初期化
    AOS.init();
});