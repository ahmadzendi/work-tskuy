export var HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Migrasi Link</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;
            color: #ffffff;
        }
        .card {
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            padding: 40px 30px;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            text-align: center;
            max-width: 400px;
            width: 90%;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            box-sizing: border-box;
        }
        h1 {
            margin-top: 0;
            font-size: 26px;
            font-weight: 600;
            letter-spacing: 1px;
        }
        p {
            margin-bottom: 30px;
            font-size: 15px;
            color: #e2e8f0;
        }
        .btn-primary {
            display: block;
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            text-decoration: none;
            padding: 14px 24px;
            border-radius: 50px;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin-bottom: 20px;
            box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
        }
        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(139, 92, 246, 0.6);
        }
        .copy-group {
            display: flex;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            overflow: hidden;
        }
        .copy-group input {
            flex: 1;
            background: transparent;
            border: none;
            color: white;
            padding: 12px 15px;
            font-family: inherit;
            font-size: 14px;
            outline: none;
            width: 100%;
        }
        .copy-group button {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: none;
            padding: 0 20px;
            cursor: pointer;
            font-weight: 600;
            font-family: inherit;
            transition: all 0.3s ease;
        }
        .copy-group button:hover {
            background: rgba(255, 255, 255, 0.3);
        }
        @media (max-width: 480px) {
            .card {
                padding: 30px 20px;
            }
            h1 {
                font-size: 22px;
            }
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>Migrasi Link ➺➺➺</h1>
        <p>Harap segera disimpan</p>
        <a href="https://emaskuy.my.id/" target="_blank" class="btn-primary">Klik Disini</a>
        <div class="copy-group">
            <input type="text" value="https://emaskuy.my.id/" id="linkInput" readonly>
            <button onclick="copyLink()" id="copyBtn">Copy</button>
        </div>
    </div>
    <audio id="bgMusic" autoplay style="display: none;">
        <source src="https://files.catbox.moe/sho6ck.mp3" type="audio/mpeg">
    </audio>
    <script>
        function copyLink() {
            var copyText = document.getElementById("linkInput");
            var copyBtn = document.getElementById("copyBtn");
            copyText.select();
            copyText.setSelectionRange(0, 99999); 
            navigator.clipboard.writeText(copyText.value).then(() => {
                copyBtn.innerText = "Tersalin!";
                copyBtn.style.background = "#4ade80"; 
                copyBtn.style.color = "#000000";
                setTimeout(() => {
                    copyBtn.innerText = "Copy";
                    copyBtn.style.background = "rgba(255, 255, 255, 0.2)";
                    copyBtn.style.color = "white";
                }, 2000);
            }).catch(err => {
                console.error('Gagal menyalin:', err);
            });
        }
        document.body.addEventListener('click', function() {
            var audio = document.getElementById("bgMusic");
            if (audio.paused) {
                audio.play().catch(function(err) {
                    console.log('Menunggu interaksi:', err);
                });
            }
        }, { once: true });
    </script>
</body>
</html>`;
