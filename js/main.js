function toggleAnswer(element) {
    var answer = element.querySelector('.a');
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        // まず全ての回答を非表示にする
        document.querySelectorAll('.faq .a').forEach(function(item) {
            item.style.display = 'none';
        });
        // クリックされた質問の回答を表示
        answer.style.display = 'block';
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', function() {
    // モバイルファーストデザイン向けにFAQの初期状態を設定
    document.querySelectorAll('.faq .a').forEach(function(item) {
        item.style.display = 'none';
    });
});
