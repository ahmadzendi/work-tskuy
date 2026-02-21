export var HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cek Telegram</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Poppins', sans-serif;
            background: #0a0a0a;
            overflow: hidden;
        }

        body::before {
            content: '';
            position: fixed;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background:
                radial-gradient(circle at 20% 50%, rgba(120, 50, 255, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(255, 50, 120, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 50% 80%, rgba(50, 150, 255, 0.1) 0%, transparent 50%);
            animation: bgMove 8s ease-in-out infinite alternate;
            z-index: 0;
        }

        @keyframes bgMove {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(-30px, -30px) rotate(3deg); }
        }

        .wrapper {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 28px;
            animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
            transform: translateY(30px);
        }

        @keyframes fadeIn {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .btn-container {
            position: relative;
            display: inline-block;
        }

        .btn-container::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            border-radius: 50px;
            background: linear-gradient(135deg, #7c3aed, #db2777);
            opacity: 0;
            animation: pulse 2.5s ease-in-out infinite;
            pointer-events: none;
        }

        @keyframes pulse {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.2; }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(1.6); }
        }

        .btn {
            display: inline-block;
            padding: 16px 48px;
            font-family: 'Poppins', sans-serif;
            font-size: 1.1rem;
            font-weight: 600;
            color: #fff;
            text-decoration: none;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            background: linear-gradient(135deg, #7c3aed, #db2777);
            box-shadow:
                0 8px 30px rgba(124, 58, 237, 0.3),
                0 2px 10px rgba(219, 39, 119, 0.2);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            letter-spacing: 0.5px;
        }

        .btn::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, #9333ea, #ec4899);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .btn:hover::before {
            opacity: 1;
        }

        .btn:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow:
                0 15px 40px rgba(124, 58, 237, 0.4),
                0 5px 15px rgba(219, 39, 119, 0.3);
        }

        .btn:active {
            transform: translateY(0) scale(0.97);
        }

        .btn span {
            position: relative;
            z-index: 1;
        }

        .particles {
            position: fixed;
            inset: 0;
            z-index: 0;
            pointer-events: none;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(168, 85, 247, 0.3);
            border-radius: 50%;
            animation: float linear infinite;
        }

        .particle:nth-child(1) { left: 10%; animation-duration: 12s; width: 3px; height: 3px; }
        .particle:nth-child(2) { left: 25%; animation-duration: 15s; animation-delay: 2s; width: 5px; height: 5px; background: rgba(236, 72, 153, 0.2); }
        .particle:nth-child(3) { left: 40%; animation-duration: 10s; animation-delay: 4s; }
        .particle:nth-child(4) { left: 55%; animation-duration: 18s; animation-delay: 1s; width: 6px; height: 6px; background: rgba(59, 130, 246, 0.2); }
        .particle:nth-child(5) { left: 70%; animation-duration: 13s; animation-delay: 3s; width: 3px; height: 3px; }
        .particle:nth-child(6) { left: 85%; animation-duration: 16s; animation-delay: 5s; background: rgba(236, 72, 153, 0.25); }

        @keyframes float {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }

        @media (max-width: 480px) {
            .btn { padding: 14px 40px; font-size: 1rem; }
        }
    </style>
</head>
<body>

    <div class="particles">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
    </div>

    <div class="wrapper">
        <div class="btn-container">
            <a href="https://t.me/+FLtJjyjVV8xlM2E1" target="_blank" rel="noopener noreferrer" class="btn">
                <span>CEK TELEGRAM</span>
            </a>
        </div>
    </div>

</body>
</html>`;
