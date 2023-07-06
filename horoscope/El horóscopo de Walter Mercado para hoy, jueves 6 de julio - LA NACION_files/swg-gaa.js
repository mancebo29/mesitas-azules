!function(){"use strict";const e="swg-google-sign-in-button",t="swg-google-3p-sign-in-button",i="swg-sign-in-with-google-button",o="swg-publisher-sign-in-button",n="swg-google-sign-in-iframe",a="swg-registration-button-container",r="swg-regwall-container",s="swg-regwall-dialog",l="swg-regwall-title",I=String.raw,_=String.raw,T=I`
  <iframe
    id="${n}"
    class="gaa-metering-regwall--iframe"
    src="$iframeUrl$"
  >
  </iframe>
`,N=I`
  <style>
    ${_`
  .gaa-metering-regwall--dialog-spacer,
  .gaa-metering-regwall--dialog,
  .gaa-metering-regwall--logo,
  .gaa-metering-regwall--title,
  .gaa-metering-regwall--description,
  .gaa-metering-regwall--description strong,
  .gaa-metering-regwall--iframe,
  .gaa-metering-regwall--registration-button-container,
  .gaa-metering-regwall--casl {
    all: initial !important;
    box-sizing: border-box !important;
    font-family: Roboto, arial, sans-serif !important;
  }

  .gaa-metering-regwall--dialog-spacer {
    background: linear-gradient(0, #808080, transparent) !important;
    bottom: 0 !important;
    display: block !important;
    position: fixed !important;
    width: 100% !important;
  }

  @keyframes slideUp {
    from {
      transform: translate(0, 200px) !important;
    }
    to {
      transform: translate(0, 0) !important;
    }
  }

  .gaa-metering-regwall--dialog {
    animation: slideUp 0.5s !important;
    background: white !important;
    border-radius: 12px 12px 0 0 !important;
    box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.3) !important;
    display: block !important;
    margin: 0 auto !important;
    max-width: 100% !important;
    padding: 24px 20px !important;
    pointer-events: auto !important;
    width: 410px !important;
  }

  .gaa-metering-regwall--logo {
    display: block !important;
    margin: 0 auto 24px !important;
  }

  .gaa-metering-regwall--title {
    color: #000 !important;
    display: block !important;
    font-size: 16px !important;
    margin: 0 0 8px !important;
    outline: none !important;
  }

  .gaa-metering-regwall--description {
    color: #646464 !important;
    display: block !important;
    font-size: 14px !important;
    line-height: 19px !important;
    margin: 0 0 30px !important;
  }

  .gaa-metering-regwall--description strong {
    color: #646464 !important;
    font-size: 14px !important;
    line-height: 19px !important;
    font-weight: bold !important;
  }

  .gaa-metering-regwall--iframe {
    border: none !important;
    display: block !important;
    height: 44px !important;
    margin: 0 0 30px !important;
    width: 100% !important;
  }

  .gaa-metering-regwall--registration-button-container {
    border: none !important;
    display: block !important;
    height: 44px !important;
    margin: 0 0 30px !important;
    width: 100% !important;
  }

  .gaa-metering-regwall--casl {
    color: #646464 !important;
    display: block !important;
    font-size: 12px !important;
    text-align: center !important;
    margin: -16px auto 32px !important;
  }

  .gaa-metering-regwall--casl a {
    color: #1967d2 !important;
  }

  .gaa-metering-regwall--line {
    background-color: #ddd !important;
    display: block !important;
    height: 1px !important;
    margin: 0 0 24px !important;
  }

  .gaa-metering-regwall--publisher-sign-in-button {
    color: #1967d2 !important;
    cursor: pointer !important;
    display: block !important;
    font-size: 12px !important;
    text-decoration: underline !important;
  }

  .gaa-metering-regwall--google-sign-in-button {
    height: 36px !important;
    margin: 0 auto 30px !important;
  }

  .gaa-metering-regwall--google-sign-in-button > div {
    animation: swgGoogleSignInButtonfadeIn 0.32s !important;
  }

  @keyframes swgGoogleSignInButtonfadeIn {
    from {
      opacity: 0 !important;
    }
    to {
      opacity: 1 !important;
    }
  }
`}
  </style>

  <div class="gaa-metering-regwall--dialog-spacer">
    <div
      role="dialog"
      aria-modal="true"
      class="gaa-metering-regwall--dialog"
      id="${s}"
      aria-labelledby="${l}"
    >
      <img
        alt="Google"
        class="gaa-metering-regwall--logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDc0IDI0Ij48cGF0aCBmaWxsPSIjNDI4NUY0IiBkPSJNOS4yNCA4LjE5djIuNDZoNS44OGMtLjE4IDEuMzgtLjY0IDIuMzktMS4zNCAzLjEtLjg2Ljg2LTIuMiAxLjgtNC41NCAxLjgtMy42MiAwLTYuNDUtMi45Mi02LjQ1LTYuNTRzMi44My02LjU0IDYuNDUtNi41NGMxLjk1IDAgMy4zOC43NyA0LjQzIDEuNzZMMTUuNCAyLjVDMTMuOTQgMS4wOCAxMS45OCAwIDkuMjQgMCA0LjI4IDAgLjExIDQuMDQuMTEgOXM0LjE3IDkgOS4xMyA5YzIuNjggMCA0LjctLjg4IDYuMjgtMi41MiAxLjYyLTEuNjIgMi4xMy0zLjkxIDIuMTMtNS43NSAwLS41Ny0uMDQtMS4xLS4xMy0xLjU0SDkuMjR6Ii8+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTI1IDYuMTljLTMuMjEgMC01LjgzIDIuNDQtNS44MyA1LjgxIDAgMy4zNCAyLjYyIDUuODEgNS44MyA1LjgxczUuODMtMi40NiA1LjgzLTUuODFjMC0zLjM3LTIuNjItNS44MS01LjgzLTUuODF6bTAgOS4zM2MtMS43NiAwLTMuMjgtMS40NS0zLjI4LTMuNTIgMC0yLjA5IDEuNTItMy41MiAzLjI4LTMuNTJzMy4yOCAxLjQzIDMuMjggMy41MmMwIDIuMDctMS41MiAzLjUyLTMuMjggMy41MnoiLz48cGF0aCBmaWxsPSIjNDI4NUY0IiBkPSJNNTMuNTggNy40OWgtLjA5Yy0uNTctLjY4LTEuNjctMS4zLTMuMDYtMS4zQzQ3LjUzIDYuMTkgNDUgOC43MiA0NSAxMmMwIDMuMjYgMi41MyA1LjgxIDUuNDMgNS44MSAxLjM5IDAgMi40OS0uNjIgMy4wNi0xLjMyaC4wOXYuODFjMCAyLjIyLTEuMTkgMy40MS0zLjEgMy40MS0xLjU2IDAtMi41My0xLjEyLTIuOTMtMi4wN2wtMi4yMi45MmMuNjQgMS41NCAyLjMzIDMuNDMgNS4xNSAzLjQzIDIuOTkgMCA1LjUyLTEuNzYgNS41Mi02LjA1VjYuNDloLTIuNDJ2MXptLTIuOTMgOC4wM2MtMS43NiAwLTMuMS0xLjUtMy4xLTMuNTIgMC0yLjA1IDEuMzQtMy41MiAzLjEtMy41MiAxLjc0IDAgMy4xIDEuNSAzLjEgMy41NC4wMSAyLjAzLTEuMzYgMy41LTMuMSAzLjV6Ii8+PHBhdGggZmlsbD0iI0ZCQkMwNSIgZD0iTTM4IDYuMTljLTMuMjEgMC01LjgzIDIuNDQtNS44MyA1LjgxIDAgMy4zNCAyLjYyIDUuODEgNS44MyA1LjgxczUuODMtMi40NiA1LjgzLTUuODFjMC0zLjM3LTIuNjItNS44MS01LjgzLTUuODF6bTAgOS4zM2MtMS43NiAwLTMuMjgtMS40NS0zLjI4LTMuNTIgMC0yLjA5IDEuNTItMy41MiAzLjI4LTMuNTJzMy4yOCAxLjQzIDMuMjggMy41MmMwIDIuMDctMS41MiAzLjUyLTMuMjggMy41MnoiLz48cGF0aCBmaWxsPSIjMzRBODUzIiBkPSJNNTggLjI0aDIuNTF2MTcuNTdINTh6Ii8+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTY4LjI2IDE1LjUyYy0xLjMgMC0yLjIyLS41OS0yLjgyLTEuNzZsNy43Ny0zLjIxLS4yNi0uNjZjLS40OC0xLjMtMS45Ni0zLjctNC45Ny0zLjctMi45OSAwLTUuNDggMi4zNS01LjQ4IDUuODEgMCAzLjI2IDIuNDYgNS44MSA1Ljc2IDUuODEgMi42NiAwIDQuMi0xLjYzIDQuODQtMi41N2wtMS45OC0xLjMyYy0uNjYuOTYtMS41NiAxLjYtMi44NiAxLjZ6bS0uMTgtNy4xNWMxLjAzIDAgMS45MS41MyAyLjIgMS4yOGwtNS4yNSAyLjE3YzAtMi40NCAxLjczLTMuNDUgMy4wNS0zLjQ1eiIvPjwvc3ZnPg=="
      />

      <div
        class="gaa-metering-regwall--title"
        id="${l}"
        tabindex="0"
      >
        $SHOWCASE_REGWALL_TITLE$
      </div>

      <div class="gaa-metering-regwall--description">
        $SHOWCASE_REGWALL_DESCRIPTION$
      </div>

      $SHOWCASE_REGISTRATION_BUTTON$ $SHOWCASE_REGWALL_CASL$

      <div class="gaa-metering-regwall--line"></div>

      <a
        id="${o}"
        class="gaa-metering-regwall--publisher-sign-in-button"
        tabindex="0"
        href="#"
      >
        $SHOWCASE_REGWALL_PUBLISHER_SIGN_IN_BUTTON$
      </a>
    </div>
  </div>
`,g=I`
  <div
    id="${a}"
    class="gaa-metering-regwall--registration-button-container"
  ></div>
`,c=I`
  <div class="gaa-metering-regwall--casl">$SHOWCASE_REGWALL_CASL$</div>
`,E=_`
  #${t},
    #${i},
    #${e} {
    margin: 0 auto;
  }

  #${i} {
    width: 220px;
  }

  #${t} > div,
  #${i} > div,
  #${e} > div {
    animation: fadeIn 0.32s;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  #${t} .abcRioButton.abcRioButtonBlue,
  #${i} .abcRioButton.abcRioButtonBlue,
  #${e} .abcRioButton.abcRioButtonBlue {
    background-color: #1a73e8;
    box-shadow: none;
    -webkit-box-shadow: none;
    border-radius: 4px;
    width: 100% !important;
  }
  #${t}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonIcon,
  #${i}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonIcon,
  #${e}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonIcon {
    display: none;
  }
  /** Hides default "Sign in with Google" text. */
  #${t}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonContents
    span[id^='not_signed_'],
  #${i}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonContents
    span[id^='not_signed_'],
  #${e}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonContents
    span[id^='not_signed_'] {
    font-size: 0 !important;
  }
  /** Renders localized "Sign in with Google" text instead. */
  #${t}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonContents
    span[id^='not_signed_']::before,
  #${i}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonContents
    span[id^='not_signed_']::before,
  #${e}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonContents
    span[id^='not_signed_']::before {
    content: '$SHOWCASE_REGWALL_GOOGLE_SIGN_IN_BUTTON$';
    font-size: 15px;
  }
`,u=_`
  body {
    margin: 0;
    overflow: hidden;
  }
  ${E}
`,S=u+_`
    #${t} .abcRioButtonContents {
      font-family: Roboto, arial, sans-serif;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.21px;
      margin-left: 6px;
      margin-right: 6px;
      vertical-align: top;
    }
    #${t} .abcRioButton {
      border-radius: 1px;
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%);
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: background-color 0.218s, border-color 0.218s,
        box-shadow 0.218s;
      transition: background-color 0.218s, border-color 0.218s,
        box-shadow 0.218s;
      -webkit-user-select: none;
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      color: #262626;
      cursor: pointer;
      outline: none;
      overflow: hidden;
      position: relative;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      width: auto;
    }
    #${t} .abcRioButtonBlue {
      border: none;
      color: #fff;
    }
  `,L=I`
  <div style="height:36px;width:180px;" class="abcRioButton abcRioButtonBlue">
    <span style="font-size:15px;line-height:34px;" class="abcRioButtonContents">
      <span id="not_signed_in">Sign in with Google</span>
    </span>
  </div>
`,O={bg:"Получавайте повече с Google",bn:"Google-এ আরও অনেক কিছুর সুবিধা পান",cs:"Získejte s&nbsp;Googlem víc",da:"Få adgang til mere med Google",de:"Immer gut informiert mit Google",el:"Αποκτήστε περισσότερα με την Google",en:"Get more with Google",es:"Disfruta de más artículos con Google","es-419":"Disfruta más artículos con Google",fr:"Plus de contenus avec Google","fr-ca":"Aller plus loin avec Google",hi:"Google की मदद से ज़्यादा मुफ़्त लेख पाएं",it:"Con Google puoi avere di più",ja:"Google でもっと読もう",kn:"Google ನಿಂದ ಹೆಚ್ಚಿನ ಪ್ರಯೋಜನ ಪಡೆಯಿರಿ",lt:"Gaukite daugiau su „Google“",lv:"Iegūstiet vairāk ar Google",ml:"Google ഉപയോഗിച്ച് കൂടുതൽ പ്രയോജനങ്ങൾ നേടൂ",mr:"Google वापरून बरेच काही मिळवा",nl:"Krijg meer met Google",pl:"Z&nbsp;Google dostajesz więcej","pt-br":"Veja mais com o Google","pt-pt":"Obtenha mais com a Google",ro:"Mai multe beneficii cu Google",sk:"Získajte viac s&nbsp;Googlom",sl:"Izkoristite več z Googlom",sv:"Få mer med Google",ta:"Google மூலம் மேலும் பல கட்டுரைகளைப் படியுங்கள்",te:"Googleతో మరిన్ని ప్రయోజనాలను పొందండి"},C={bg:"За съдържанието обикновено се изисква плащане, но Google ви дава достъп без парично заплащане до тази и други статии, когато се регистрирате за {PUBLICATION} с профила си в Google.",bn:"এই কন্টেন্ট অ্যাক্সেস করার জন্য সাধারণত পেমেন্ট করতে হয় কিন্তু Google আপনাকে এই নিবন্ধ ফ্রিতে অ্যাক্সেস করতে এবং সেইসাথে অনেক কিছু পেতে সাহায্য করছে। এই সুবিধা পাওয়ার জন্য Google অ্যাকাউন্ট ব্যবহার করে আপনাকে {PUBLICATION}-এ রেজিস্টার করতে হবে।",cs:"Tento obsah je obvykle zpoplatněn, ale pokud se do publikace {PUBLICATION} zaregistrujete pomocí účtu Google, získáte od Googlu přístup zdarma.",da:"Du skal normalt betale for at få adgang til dette indhold, men hvis du tilmelder dig {PUBLICATION} med din Google-konto, giver Google dig gratis adgang til artiklen og andet indhold.",de:"Dieser Inhalt ist normalerweise kostenpflichtig. Google gewährt dir jedoch kostenlos Zugriff auf diesen Artikel und andere Inhalte, wenn du dich mit deinem Google-Konto bei {PUBLICATION} registrierst.",el:"Συνήθως απαιτείται πληρωμή για αυτό το περιεχόμενο, αλλά η Google σας προσφέρει πρόσβαση χωρίς χρέωση σε αυτό το άρθρο και σε πολλά ακόμη, εάν εγγραφείτε στην έκδοση {PUBLICATION} με χρήση του Λογαριασμού σας Google.",en:"This content usually requires payment, but Google is giving you free access to this article and more when you register with {PUBLICATION} using your Google Account.",es:"Normalmente, es necesario pagar para ver este contenido, pero Google te ofrece acceso gratuito a este y otros artículos si te registras en {PUBLICATION} con tu cuenta de Google.","es-419":"Normalmente, es necesario pagar para ver este contenido, pero Google te ofrece acceso gratuito a este y otros artículos si te registras en {PUBLICATION} con tu Cuenta&nbsp;de&nbsp;Google.",fr:"Ce contenu est généralement payant, mais vous pouvez lire cet article et d'autres contenus gratuitement grâce à Google en vous inscrivant sur {PUBLICATION} avec votre compte Google.","fr-ca":"Ce contenu est généralement payant, mais Google vous offre un accès gratuit à cet article et à d'autres si vous vous inscrivez à {PUBLICATION} à l'aide de votre compte Google.",hi:"आम तौर पर, इस कॉन्टेंट को पढ़ने के लिए पैसे चुकाने पड़ते हैं. हालांकि, Google की मदद से, इस लेख और अन्य कॉन्टेंट को मुफ़्त में ऐक्सेस किया जा सकता है. इसके लिए, आपको Google खाते का इस्तेमाल करके, {PUBLICATION} में रजिस्टर करना होगा.",it:"Generalmente questi contenuti sono a pagamento, ma Google ti offre accesso gratuito a questo e ad altri articoli se ti registri a {PUBLICATION} usando il tuo Account Google.",ja:"通常、この記事をお読みいただくにはお支払いが必要ですが、お使いの Google アカウントで {PUBLICATION} に登録すると、この記事を無料でお読みいただけます。",kn:"ಸಾಮಾನ್ಯವಾಗಿ ಈ ವಿಷಯಕ್ಕಾಗಿ ಹಣ ಪಾವತಿಸಬೇಕಾಗುತ್ತದೆ, ಆದರೆ ನೀವು {PUBLICATION} ಗೆ ನಿಮ್ಮ Google ಖಾತೆಯ ಮೂಲಕ ನೋಂದಾಯಿಸಿಕೊಂಡಾಗ Google ಈ ಲೇಖನ ಮತ್ತು ಇನ್ನಷ್ಟು ವಿಷಯಗಳಿಗೆ ನಿಮಗೆ ಉಚಿತವಾದ ಪ್ರವೇಶವನ್ನು ನೀಡುತ್ತದೆ.",lt:"Šis turinys paprastai yra mokamas, tačiau „Google“ suteikia jums prieigą prie šio straipsnio ir kt. be papildomo mokesčio, kai užsiregistruojate „{PUBLICATION}“ naudodami savo „Google“ paskyrą.",lv:"Parasti šis ir maksas saturs, taču Google piešķirs jums bezmaksas piekļuvi šim un citiem rakstiem, ja reģistrēsieties izdevumam {PUBLICATION} ar savu Google kontu.",ml:"സാധാരണ ഈ ഉള്ളടക്കത്തിന് പണം നൽകേണ്ടതുണ്ട്, എന്നാൽ Google അക്കൗണ്ട് ഉപയോഗിച്ച് {PUBLICATION} എന്നതിൽ രജിസ്‌റ്റർ ചെയ്യുമ്പോൾ, ഈ ലേഖനത്തിലേക്കും മറ്റും Google നിങ്ങൾക്ക് സൗജന്യ ആക്‌സസ് നൽകുന്നു.",mr:"या आशयासाठी सामान्यतः पेमेंट आवश्यक असते पण तुम्ही तुमचे Google खाते वापरून {PUBLICATION} मध्ये नोंदणी करता तेव्हा, Google तुम्हाला या लेखाचा आणि आणखी बऱ्याच आशयाचा विनामूल्य ॲक्सेस देते.",nl:"Voor deze content moet je eigenlijk betalen. Maar Google geeft je kosteloos toegang tot dit artikel en andere content als je je registreert bij {PUBLICATION} via je Google-account.",pl:"Te treści zazwyczaj wymagają opłaty, ale dzięki Google możesz bezpłatnie przeczytać ten artykuł i&nbsp;korzystać z&nbsp;innych materiałów po zarejestrowaniu się w&nbsp;publikacji {PUBLICATION} za pomocą konta Google.","pt-br":"Normalmente, é preciso pagar por este conteúdo. Porém, basta você se registrar na publicação {PUBLICATION} usando sua Conta do Google para ter acesso a esta matéria e muito mais sem custos financeiros.","pt-pt":"Geralmente, este conteúdo requer um pagamento, mas a Google concede-lhe acesso gratuito a este artigo e muito mais ao registar-se na publicação {PUBLICATION} com a sua Conta Google.",ro:"Acest conținut este de obicei cu plată, dar Google vă oferă acces fără costuri la acest articol și la altele când vă înregistrați la {PUBLICATION} folosind Contul Google.",sk:"Tento obsah je obvykle platený, ale ak sa do publikácie {PUBLICATION} zaregistrujete účtom Google, získate od Googlu bezplatný prístup k&nbsp;tomuto článku a&nbsp;ďalšie výhody.",sl:"Za to vsebino je običajno zahtevano plačilo, vendar vam Google omogoča dostop do tega članka in drugega brez stroškov, če se z računom Google registrirate pri publikaciji {PUBLICATION}.",sv:"Det krävs vanligtvis betalning för det här innehållet, men Google ger dig gratis åtkomst till artikeln och annat innehåll när du registrerar dig hos {PUBLICATION} med ditt Google-konto.",ta:"வழக்கமாக இந்த உள்ளடக்கத்தை வாசிக்க கட்டணம் செலுத்த வேண்டியிருக்கும். ஆனால் {PUBLICATION} இல் உங்கள் Google கணக்கைப் பயன்படுத்திப் பதிவுசெய்யும்போது இந்தக் கட்டுரைக்கும் மேலும் பலவற்றுக்கும் Google இலவச அணுகலை வழங்குகிறது.",te:"ఈ కంటెంట్‌కు మీరు సాధారణంగా పేమెంట్ చేయాల్సి ఉంటుంది, కానీ మీరు Google ఖాతాను ఉపయోగించి {PUBLICATION}తో రిజిస్టర్ చేసుకున్నప్పుడు, ఈ వార్తా కథనానికి ఇంకా మరెన్నో వాటికి Google, ఉచిత యాక్సెస్‌ను ఇస్తుంది."},A={bg:"Вече сте се регистрирали? Вход",bn:"আগে থেকেই রেজিস্টার করেছেন? সাইন-ইন করুন",cs:"Jste už zaregistrováni? Přihlásit se",da:"Er du allerede tilmeldt? Log ind",de:"Bereits registriert? Anmelden",el:"Έχετε εγγραφεί ήδη; Σύνδεση",en:"Already registered? Sign in",es:"¿Ya te has registrado? Iniciar sesión","es-419":"¿Ya te registraste? Accede",fr:"Déjà inscrit&nbsp;? Connectez-vous","fr-ca":"Déjà inscrit? Se connecter",hi:"पहले से रजिस्टर किया हुआ है? साइन इन करें",it:"Hai già effettuato la registrazione? Accedi",ja:"登録済みの方: ログイン",kn:"ಈಗಾಗಲೇ ನೋಂದಾಯಿಸಲಾಗಿದೆಯೇ? ಸೈನ್ ಇನ್",lt:"Jau užsiregistravote? Prisijungti",lv:"Vai esat jau reģistrējies? Pierakstīties",ml:"മുമ്പേ രജിസ്റ്റർ ചെയ്തിട്ടുണ്ടോ? സൈൻ ഇൻ ചെയ്യുക",mr:"आधीपासून नोंदणी केली आहे का? साइन इन करा",nl:"Al geregistreerd? Inloggen",pl:"Jesteś już zarejestrowanym użytkownikiem? Zaloguj się","pt-br":"Já se inscreveu? Fazer login","pt-pt":"Já fez o seu registo? Inicie sessão",ro:"V-ați înregistrat deja? Conectați-vă",sk:"Už máte zaregistrovaný účet? Prihlásiť sa",sl:"Ste že registrirani? Prijavite se.",sv:"Har du redan registrerat dig? Logga in",ta:"ஏற்கெனவே பதிவுசெய்துள்ளீர்களா? உள்நுழைக",te:"ఇప్పటికే రిజిస్టర్ చేయబడి ఉందా? సైన్ ఇన్ చేయండి"},m={bg:"Вход с Google",bn:"Google দিয়ে সাইন-ইন করুন",cs:"Přihlásit se přes Google",da:"Log ind med Google",de:"Über Google anmelden",el:"Σύνδεση μέσω Google",en:"Sign in with Google",es:"Iniciar sesión con Google","es-419":"Acceder con Google",fr:"Se connecter avec Google","fr-ca":"Se connecter avec Google",hi:"Google से साइन इन करें",it:"Accedi con Google",ja:"Google でログイン",kn:"Google ಖಾತೆ ಬಳಸಿಕೊಂಡು ಸೈನ್ ಇನ್ ಮಾಡಿ",lt:"Prisijunkite su „Google“",lv:"Pierakstīties, izmantojot Google",ml:"Google ഉപയോഗിച്ച് സൈൻ ഇൻ ചെയ്യുക",mr:"Google वापरून साइन इन करा",nl:"Inloggen met Google",pl:"Zaloguj się przez Google","pt-br":"Fazer login com o Google","pt-pt":"Iniciar sessão com o Google",ro:"Conectează-te cu Google",sk:"Prihlásiť sa účtom Google",sl:"Prijavite se z Googlom",sv:"Logga in med Google",ta:"Google மூலம் உள்நுழைக",te:"Googleతో సైన్ ఇన్ చేయండి"},d={bg:"Прегледайте {LINK_START}Общите условия за канадското законодателство за борба със спама{LINK_END} на {PUBLICATION}",bn:"{PUBLICATION}-এর {LINK_START}CASL শর্ত{LINK_END} পর্যালোচনা করুন",cs:"Prostudujte si {LINK_START}podmínky CASL{LINK_END} publikace {PUBLICATION}",da:"Gennemgå {LINK_START}CASL-vilkårene{LINK_END} (Canadian Anti-Spam Legislation, canadisk lovgivning vedrørende antispam) for {PUBLICATION}",de:"{LINK_START}CASL-Bedingungen{LINK_END} von {PUBLICATION} ansehen",el:"Ελέγξτε αν τηρούνται στη δημοσίευση {PUBLICATION} οι {LINK_START}Όροι CASL{LINK_END}",en:"Review {PUBLICATION}'s {LINK_START}CASL terms{LINK_END}",es:"Consulta los {LINK_START}términos de la CASL{LINK_END} de {PUBLICATION}","es-419":"Consulta las {LINK_START}condiciones de CASL{LINK_END} de {PUBLICATION}",fr:"Consultez les {LINK_START}Conditions d'utilisation LCAP (Loi canadienne anti-pourriel){LINK_END} de {PUBLICATION}","fr-ca":"Consulter les {LINK_START}conditions d'utilisation relatives à la Loi canadienne antipourriel (LCAP){LINK_END} de la publication {PUBLICATION}",hi:"{PUBLICATION} की {LINK_START}सीएएसएल (कैनेडियन एंटी-स्पैम लेजिस्लेशन) से जुड़ी शर्तों{LINK_END} के बारे में पढ़ें",it:"Rileggi i {LINK_START}termini della legge CASL{LINK_END} di {PUBLICATION}",ja:"{PUBLICATION} の {LINK_START}CASL 規約{LINK_END}を見る",kn:"{PUBLICATION} ನ {LINK_START}CASL ನಿಯಮಗಳು{LINK_END} ಅನ್ನು ಪರಿಶೀಲಿಸಿ",lt:"Peržiūrėkite „{PUBLICATION}“ {LINK_START}CASL sąlygas{LINK_END}",lv:"Pārskatīt {PUBLICATION} {LINK_START}CASL noteikumus{LINK_END}",ml:"{PUBLICATION} എന്നതിന്റെ {LINK_START}CASL നിബന്ധനകൾ{LINK_END} അവലോകനം ചെയ്യുക",mr:"{PUBLICATION} च्या {LINK_START}CASL अटी{LINK_END} यांचे पुनरावलोकन करा",nl:"Bekijk de {LINK_START}CASL-voorwaarden{LINK_END} van {PUBLICATION}",pl:"Zapoznaj się z&nbsp;{LINK_START}warunkami CASL{LINK_END} publikacji {PUBLICATION}","pt-br":"Confira os {LINK_START}termos da CASL{LINK_END} da publicação {PUBLICATION}","pt-pt":"Analise os {LINK_START}termos da CASL{LINK_END} da publicação {PUBLICATION}",ro:"Examinați {LINK_START}Termenii CASL{LINK_END} ai {PUBLICATION}",sk:"Prečítajte si {LINK_START}podmienky CASL{LINK_END} publikácie {PUBLICATION}",sl:"Preglejte {LINK_START}pogoje CASL{LINK_END} za publikacijo {PUBLICATION}",sv:"Läs {LINK_START}villkoren i lagstiftningen CASL{LINK_END} för {PUBLICATION}",ta:"{PUBLICATION} இன் {LINK_START}CASL விதிமுறைகளைப்{LINK_END} பாருங்கள்",te:"{PUBLICATION}‌కు సంబంధించిన {LINK_START}CASL నియమాల{LINK_END}ను రివ్యూ చేయండి"},R="swg-gaa-post-message-stamp",p="introduction",f="user",M="error",P="gsi-button-click",G="siwg-button-click",U="3p-button-click";var b=(e=>(e.FREE="FREE",e.SUBSCRIBER="SUBSCRIBER",e.METERING="METERING",e))(b||{}),w=(e=>(e.RESERVED_USER="RESERVED_USER",e))(w||{}),B=(e=>(e.CLIENT_SIDE="CLIENT_SIDE",e.SERVER_SIDE="SERVER_SIDE",e))(B||{}),D=(e=>(e[e.UNKNOWN=0]="UNKNOWN",e[e.IMPRESSION_PAYWALL=1]="IMPRESSION_PAYWALL",e[e.IMPRESSION_AD=2]="IMPRESSION_AD",e[e.IMPRESSION_OFFERS=3]="IMPRESSION_OFFERS",e[e.IMPRESSION_SUBSCRIBE_BUTTON=4]="IMPRESSION_SUBSCRIBE_BUTTON",e[e.IMPRESSION_SMARTBOX=5]="IMPRESSION_SMARTBOX",e[e.IMPRESSION_SWG_BUTTON=6]="IMPRESSION_SWG_BUTTON",e[e.IMPRESSION_CLICK_TO_SHOW_OFFERS=7]="IMPRESSION_CLICK_TO_SHOW_OFFERS",e[e.IMPRESSION_CLICK_TO_SHOW_OFFERS_OR_ALREADY_SUBSCRIBED=8]="IMPRESSION_CLICK_TO_SHOW_OFFERS_OR_ALREADY_SUBSCRIBED",e[e.IMPRESSION_SUBSCRIPTION_COMPLETE=9]="IMPRESSION_SUBSCRIPTION_COMPLETE",e[e.IMPRESSION_ACCOUNT_CHANGED=10]="IMPRESSION_ACCOUNT_CHANGED",e[e.IMPRESSION_PAGE_LOAD=11]="IMPRESSION_PAGE_LOAD",e[e.IMPRESSION_LINK=12]="IMPRESSION_LINK",e[e.IMPRESSION_SAVE_SUBSCR_TO_GOOGLE=13]="IMPRESSION_SAVE_SUBSCR_TO_GOOGLE",e[e.IMPRESSION_GOOGLE_UPDATED=14]="IMPRESSION_GOOGLE_UPDATED",e[e.IMPRESSION_SHOW_OFFERS_SMARTBOX=15]="IMPRESSION_SHOW_OFFERS_SMARTBOX",e[e.IMPRESSION_SHOW_OFFERS_SWG_BUTTON=16]="IMPRESSION_SHOW_OFFERS_SWG_BUTTON",e[e.IMPRESSION_SELECT_OFFER_SMARTBOX=17]="IMPRESSION_SELECT_OFFER_SMARTBOX",e[e.IMPRESSION_SELECT_OFFER_SWG_BUTTON=18]="IMPRESSION_SELECT_OFFER_SWG_BUTTON",e[e.IMPRESSION_SHOW_CONTRIBUTIONS_SWG_BUTTON=19]="IMPRESSION_SHOW_CONTRIBUTIONS_SWG_BUTTON",e[e.IMPRESSION_SELECT_CONTRIBUTION_SWG_BUTTON=20]="IMPRESSION_SELECT_CONTRIBUTION_SWG_BUTTON",e[e.IMPRESSION_METER_TOAST=21]="IMPRESSION_METER_TOAST",e[e.IMPRESSION_REGWALL=22]="IMPRESSION_REGWALL",e[e.IMPRESSION_SHOWCASE_REGWALL=23]="IMPRESSION_SHOWCASE_REGWALL",e[e.IMPRESSION_SWG_SUBSCRIPTION_MINI_PROMPT=24]="IMPRESSION_SWG_SUBSCRIPTION_MINI_PROMPT",e[e.IMPRESSION_SWG_CONTRIBUTION_MINI_PROMPT=25]="IMPRESSION_SWG_CONTRIBUTION_MINI_PROMPT",e[e.IMPRESSION_CONTRIBUTION_OFFERS=26]="IMPRESSION_CONTRIBUTION_OFFERS",e[e.IMPRESSION_TWG_COUNTER=27]="IMPRESSION_TWG_COUNTER",e[e.IMPRESSION_TWG_SITE_SUPPORTER_WALL=28]="IMPRESSION_TWG_SITE_SUPPORTER_WALL",e[e.IMPRESSION_TWG_PUBLICATION=29]="IMPRESSION_TWG_PUBLICATION",e[e.IMPRESSION_TWG_STATIC_BUTTON=30]="IMPRESSION_TWG_STATIC_BUTTON",e[e.IMPRESSION_TWG_DYNAMIC_BUTTON=31]="IMPRESSION_TWG_DYNAMIC_BUTTON",e[e.IMPRESSION_TWG_STICKER_SELECTION_SCREEN=32]="IMPRESSION_TWG_STICKER_SELECTION_SCREEN",e[e.IMPRESSION_TWG_PUBLICATION_NOT_SET_UP=33]="IMPRESSION_TWG_PUBLICATION_NOT_SET_UP",e[e.IMPRESSION_REGWALL_OPT_IN=34]="IMPRESSION_REGWALL_OPT_IN",e[e.IMPRESSION_NEWSLETTER_OPT_IN=35]="IMPRESSION_NEWSLETTER_OPT_IN",e[e.IMPRESSION_SUBSCRIPTION_OFFERS_ERROR=36]="IMPRESSION_SUBSCRIPTION_OFFERS_ERROR",e[e.IMPRESSION_CONTRIBUTION_OFFERS_ERROR=37]="IMPRESSION_CONTRIBUTION_OFFERS_ERROR",e[e.IMPRESSION_TWG_SHORTENED_STICKER_FLOW=38]="IMPRESSION_TWG_SHORTENED_STICKER_FLOW",e[e.IMPRESSION_SUBSCRIPTION_LINKING_LOADING=39]="IMPRESSION_SUBSCRIPTION_LINKING_LOADING",e[e.IMPRESSION_SUBSCRIPTION_LINKING_COMPLETE=40]="IMPRESSION_SUBSCRIPTION_LINKING_COMPLETE",e[e.IMPRESSION_SUBSCRIPTION_LINKING_ERROR=41]="IMPRESSION_SUBSCRIPTION_LINKING_ERROR",e[e.IMPRESSION_SURVEY=42]="IMPRESSION_SURVEY",e[e.IMPRESSION_REGWALL_ERROR=43]="IMPRESSION_REGWALL_ERROR",e[e.IMPRESSION_NEWSLETTER_ERROR=44]="IMPRESSION_NEWSLETTER_ERROR",e[e.IMPRESSION_SURVEY_ERROR=45]="IMPRESSION_SURVEY_ERROR",e[e.IMPRESSION_METER_TOAST_ERROR=46]="IMPRESSION_METER_TOAST_ERROR",e[e.IMPRESSION_MINI_PROMPT=47]="IMPRESSION_MINI_PROMPT",e[e.IMPRESSION_MINI_PROMPT_ERROR=48]="IMPRESSION_MINI_PROMPT_ERROR",e[e.ACTION_SUBSCRIBE=1e3]="ACTION_SUBSCRIBE",e[e.ACTION_PAYMENT_COMPLETE=1001]="ACTION_PAYMENT_COMPLETE",e[e.ACTION_ACCOUNT_CREATED=1002]="ACTION_ACCOUNT_CREATED",e[e.ACTION_ACCOUNT_ACKNOWLEDGED=1003]="ACTION_ACCOUNT_ACKNOWLEDGED",e[e.ACTION_SUBSCRIPTIONS_LANDING_PAGE=1004]="ACTION_SUBSCRIPTIONS_LANDING_PAGE",e[e.ACTION_PAYMENT_FLOW_STARTED=1005]="ACTION_PAYMENT_FLOW_STARTED",e[e.ACTION_OFFER_SELECTED=1006]="ACTION_OFFER_SELECTED",e[e.ACTION_SWG_BUTTON_CLICK=1007]="ACTION_SWG_BUTTON_CLICK",e[e.ACTION_VIEW_OFFERS=1008]="ACTION_VIEW_OFFERS",e[e.ACTION_ALREADY_SUBSCRIBED=1009]="ACTION_ALREADY_SUBSCRIBED",e[e.ACTION_NEW_DEFERRED_ACCOUNT=1010]="ACTION_NEW_DEFERRED_ACCOUNT",e[e.ACTION_LINK_CONTINUE=1011]="ACTION_LINK_CONTINUE",e[e.ACTION_LINK_CANCEL=1012]="ACTION_LINK_CANCEL",e[e.ACTION_GOOGLE_UPDATED_CLOSE=1013]="ACTION_GOOGLE_UPDATED_CLOSE",e[e.ACTION_USER_CANCELED_PAYFLOW=1014]="ACTION_USER_CANCELED_PAYFLOW",e[e.ACTION_SAVE_SUBSCR_TO_GOOGLE_CONTINUE=1015]="ACTION_SAVE_SUBSCR_TO_GOOGLE_CONTINUE",e[e.ACTION_SAVE_SUBSCR_TO_GOOGLE_CANCEL=1016]="ACTION_SAVE_SUBSCR_TO_GOOGLE_CANCEL",e[e.ACTION_SWG_BUTTON_SHOW_OFFERS_CLICK=1017]="ACTION_SWG_BUTTON_SHOW_OFFERS_CLICK",e[e.ACTION_SWG_BUTTON_SELECT_OFFER_CLICK=1018]="ACTION_SWG_BUTTON_SELECT_OFFER_CLICK",e[e.ACTION_SWG_BUTTON_SHOW_CONTRIBUTIONS_CLICK=1019]="ACTION_SWG_BUTTON_SHOW_CONTRIBUTIONS_CLICK",e[e.ACTION_SWG_BUTTON_SELECT_CONTRIBUTION_CLICK=1020]="ACTION_SWG_BUTTON_SELECT_CONTRIBUTION_CLICK",e[e.ACTION_USER_CONSENT_DEFERRED_ACCOUNT=1021]="ACTION_USER_CONSENT_DEFERRED_ACCOUNT",e[e.ACTION_USER_DENY_DEFERRED_ACCOUNT=1022]="ACTION_USER_DENY_DEFERRED_ACCOUNT",e[e.ACTION_DEFERRED_ACCOUNT_REDIRECT=1023]="ACTION_DEFERRED_ACCOUNT_REDIRECT",e[e.ACTION_GET_ENTITLEMENTS=1024]="ACTION_GET_ENTITLEMENTS",e[e.ACTION_METER_TOAST_SUBSCRIBE_CLICK=1025]="ACTION_METER_TOAST_SUBSCRIBE_CLICK",e[e.ACTION_METER_TOAST_EXPANDED=1026]="ACTION_METER_TOAST_EXPANDED",e[e.ACTION_METER_TOAST_CLOSED_BY_ARTICLE_INTERACTION=1027]="ACTION_METER_TOAST_CLOSED_BY_ARTICLE_INTERACTION",e[e.ACTION_METER_TOAST_CLOSED_BY_SWIPE_DOWN=1028]="ACTION_METER_TOAST_CLOSED_BY_SWIPE_DOWN",e[e.ACTION_METER_TOAST_CLOSED_BY_X_CLICKED=1029]="ACTION_METER_TOAST_CLOSED_BY_X_CLICKED",e[e.ACTION_SWG_SUBSCRIPTION_MINI_PROMPT_CLICK=1030]="ACTION_SWG_SUBSCRIPTION_MINI_PROMPT_CLICK",e[e.ACTION_SWG_CONTRIBUTION_MINI_PROMPT_CLICK=1031]="ACTION_SWG_CONTRIBUTION_MINI_PROMPT_CLICK",e[e.ACTION_SWG_SUBSCRIPTION_MINI_PROMPT_CLOSE=1032]="ACTION_SWG_SUBSCRIPTION_MINI_PROMPT_CLOSE",e[e.ACTION_SWG_CONTRIBUTION_MINI_PROMPT_CLOSE=1033]="ACTION_SWG_CONTRIBUTION_MINI_PROMPT_CLOSE",e[e.ACTION_CONTRIBUTION_OFFER_SELECTED=1034]="ACTION_CONTRIBUTION_OFFER_SELECTED",e[e.ACTION_SHOWCASE_REGWALL_GSI_CLICK=1035]="ACTION_SHOWCASE_REGWALL_GSI_CLICK",e[e.ACTION_SHOWCASE_REGWALL_EXISTING_ACCOUNT_CLICK=1036]="ACTION_SHOWCASE_REGWALL_EXISTING_ACCOUNT_CLICK",e[e.ACTION_SUBSCRIPTION_OFFERS_CLOSED=1037]="ACTION_SUBSCRIPTION_OFFERS_CLOSED",e[e.ACTION_CONTRIBUTION_OFFERS_CLOSED=1038]="ACTION_CONTRIBUTION_OFFERS_CLOSED",e[e.ACTION_TWG_STATIC_CTA_CLICK=1039]="ACTION_TWG_STATIC_CTA_CLICK",e[e.ACTION_TWG_DYNAMIC_CTA_CLICK=1040]="ACTION_TWG_DYNAMIC_CTA_CLICK",e[e.ACTION_TWG_SITE_LEVEL_SUPPORTER_WALL_CTA_CLICK=1041]="ACTION_TWG_SITE_LEVEL_SUPPORTER_WALL_CTA_CLICK",e[e.ACTION_TWG_DIALOG_SUPPORTER_WALL_CTA_CLICK=1042]="ACTION_TWG_DIALOG_SUPPORTER_WALL_CTA_CLICK",e[e.ACTION_TWG_COUNTER_CLICK=1043]="ACTION_TWG_COUNTER_CLICK",e[e.ACTION_TWG_SITE_SUPPORTER_WALL_ALL_THANKS_CLICK=1044]="ACTION_TWG_SITE_SUPPORTER_WALL_ALL_THANKS_CLICK",e[e.ACTION_TWG_PAID_STICKER_SELECTED_SCREEN_CLOSE_CLICK=1045]="ACTION_TWG_PAID_STICKER_SELECTED_SCREEN_CLOSE_CLICK",e[e.ACTION_TWG_PAID_STICKER_SELECTION_CLICK=1046]="ACTION_TWG_PAID_STICKER_SELECTION_CLICK",e[e.ACTION_TWG_FREE_STICKER_SELECTION_CLICK=1047]="ACTION_TWG_FREE_STICKER_SELECTION_CLICK",e[e.ACTION_TWG_MINI_SUPPORTER_WALL_CLICK=1048]="ACTION_TWG_MINI_SUPPORTER_WALL_CLICK",e[e.ACTION_TWG_CREATOR_BENEFIT_CLICK=1049]="ACTION_TWG_CREATOR_BENEFIT_CLICK",e[e.ACTION_TWG_FREE_TRANSACTION_START_NEXT_BUTTON_CLICK=1050]="ACTION_TWG_FREE_TRANSACTION_START_NEXT_BUTTON_CLICK",e[e.ACTION_TWG_PAID_TRANSACTION_START_NEXT_BUTTON_CLICK=1051]="ACTION_TWG_PAID_TRANSACTION_START_NEXT_BUTTON_CLICK",e[e.ACTION_TWG_STICKER_SELECTION_SCREEN_CLOSE_CLICK=1052]="ACTION_TWG_STICKER_SELECTION_SCREEN_CLOSE_CLICK",e[e.ACTION_TWG_ARTICLE_LEVEL_SUPPORTER_WALL_CTA_CLICK=1053]="ACTION_TWG_ARTICLE_LEVEL_SUPPORTER_WALL_CTA_CLICK",e[e.ACTION_REGWALL_OPT_IN_BUTTON_CLICK=1054]="ACTION_REGWALL_OPT_IN_BUTTON_CLICK",e[e.ACTION_REGWALL_ALREADY_OPTED_IN_CLICK=1055]="ACTION_REGWALL_ALREADY_OPTED_IN_CLICK",e[e.ACTION_NEWSLETTER_OPT_IN_BUTTON_CLICK=1056]="ACTION_NEWSLETTER_OPT_IN_BUTTON_CLICK",e[e.ACTION_NEWSLETTER_ALREADY_OPTED_IN_CLICK=1057]="ACTION_NEWSLETTER_ALREADY_OPTED_IN_CLICK",e[e.ACTION_REGWALL_OPT_IN_CLOSE=1058]="ACTION_REGWALL_OPT_IN_CLOSE",e[e.ACTION_NEWSLETTER_OPT_IN_CLOSE=1059]="ACTION_NEWSLETTER_OPT_IN_CLOSE",e[e.ACTION_SHOWCASE_REGWALL_SIWG_CLICK=1060]="ACTION_SHOWCASE_REGWALL_SIWG_CLICK",e[e.ACTION_TWG_CHROME_APP_MENU_ENTRY_POINT_CLICK=1061]="ACTION_TWG_CHROME_APP_MENU_ENTRY_POINT_CLICK",e[e.ACTION_TWG_DISCOVER_FEED_MENU_ENTRY_POINT_CLICK=1062]="ACTION_TWG_DISCOVER_FEED_MENU_ENTRY_POINT_CLICK",e[e.ACTION_SHOWCASE_REGWALL_3P_BUTTON_CLICK=1063]="ACTION_SHOWCASE_REGWALL_3P_BUTTON_CLICK",e[e.ACTION_SUBSCRIPTION_OFFERS_RETRY=1064]="ACTION_SUBSCRIPTION_OFFERS_RETRY",e[e.ACTION_CONTRIBUTION_OFFERS_RETRY=1065]="ACTION_CONTRIBUTION_OFFERS_RETRY",e[e.ACTION_TWG_SHORTENED_STICKER_FLOW_STICKER_SELECTION_CLICK=1066]="ACTION_TWG_SHORTENED_STICKER_FLOW_STICKER_SELECTION_CLICK",e[e.ACTION_INITIATE_UPDATED_SUBSCRIPTION_LINKING=1067]="ACTION_INITIATE_UPDATED_SUBSCRIPTION_LINKING",e[e.ACTION_SURVEY_SUBMIT_CLICK=1068]="ACTION_SURVEY_SUBMIT_CLICK",e[e.ACTION_SURVEY_CLOSED=1069]="ACTION_SURVEY_CLOSED",e[e.ACTION_SURVEY_DATA_TRANSFER=1070]="ACTION_SURVEY_DATA_TRANSFER",e[e.ACTION_REGWALL_PAGE_REFRESH=1071]="ACTION_REGWALL_PAGE_REFRESH",e[e.ACTION_NEWSLETTER_PAGE_REFRESH=1072]="ACTION_NEWSLETTER_PAGE_REFRESH",e[e.ACTION_SURVEY_PAGE_REFRESH=1073]="ACTION_SURVEY_PAGE_REFRESH",e[e.ACTION_METER_TOAST_PAGE_REFRESH=1074]="ACTION_METER_TOAST_PAGE_REFRESH",e[e.ACTION_MINI_PROMPT_INTERACTION=1075]="ACTION_MINI_PROMPT_INTERACTION",e[e.ACTION_SURVEY_PREVIOUS_BUTTON_CLICK=1076]="ACTION_SURVEY_PREVIOUS_BUTTON_CLICK",e[e.ACTION_SURVEY_NEXT_BUTTON_CLICK=1077]="ACTION_SURVEY_NEXT_BUTTON_CLICK",e[e.EVENT_PAYMENT_FAILED=2e3]="EVENT_PAYMENT_FAILED",e[e.EVENT_REGWALL_OPT_IN_FAILED=2001]="EVENT_REGWALL_OPT_IN_FAILED",e[e.EVENT_NEWSLETTER_OPT_IN_FAILED=2002]="EVENT_NEWSLETTER_OPT_IN_FAILED",e[e.EVENT_REGWALL_ALREADY_OPT_IN=2003]="EVENT_REGWALL_ALREADY_OPT_IN",e[e.EVENT_NEWSLETTER_ALREADY_OPT_IN=2004]="EVENT_NEWSLETTER_ALREADY_OPT_IN",e[e.EVENT_SUBSCRIPTION_LINKING_FAILED=2005]="EVENT_SUBSCRIPTION_LINKING_FAILED",e[e.EVENT_SURVEY_ALREADY_SUBMITTED=2006]="EVENT_SURVEY_ALREADY_SUBMITTED",e[e.EVENT_SURVEY_COMPLETION_RECORD_FAILED=2007]="EVENT_SURVEY_COMPLETION_RECORD_FAILED",e[e.EVENT_SURVEY_DATA_TRANSFER_FAILED=2008]="EVENT_SURVEY_DATA_TRANSFER_FAILED",e[e.EVENT_CUSTOM=3e3]="EVENT_CUSTOM",e[e.EVENT_CONFIRM_TX_ID=3001]="EVENT_CONFIRM_TX_ID",e[e.EVENT_CHANGED_TX_ID=3002]="EVENT_CHANGED_TX_ID",e[e.EVENT_GPAY_NO_TX_ID=3003]="EVENT_GPAY_NO_TX_ID",e[e.EVENT_GPAY_CANNOT_CONFIRM_TX_ID=3004]="EVENT_GPAY_CANNOT_CONFIRM_TX_ID",e[e.EVENT_GOOGLE_UPDATED=3005]="EVENT_GOOGLE_UPDATED",e[e.EVENT_NEW_TX_ID=3006]="EVENT_NEW_TX_ID",e[e.EVENT_UNLOCKED_BY_SUBSCRIPTION=3007]="EVENT_UNLOCKED_BY_SUBSCRIPTION",e[e.EVENT_UNLOCKED_BY_METER=3008]="EVENT_UNLOCKED_BY_METER",e[e.EVENT_NO_ENTITLEMENTS=3009]="EVENT_NO_ENTITLEMENTS",e[e.EVENT_HAS_METERING_ENTITLEMENTS=3010]="EVENT_HAS_METERING_ENTITLEMENTS",e[e.EVENT_OFFERED_METER=3011]="EVENT_OFFERED_METER",e[e.EVENT_UNLOCKED_FREE_PAGE=3012]="EVENT_UNLOCKED_FREE_PAGE",e[e.EVENT_INELIGIBLE_PAYWALL=3013]="EVENT_INELIGIBLE_PAYWALL",e[e.EVENT_UNLOCKED_FOR_CRAWLER=3014]="EVENT_UNLOCKED_FOR_CRAWLER",e[e.EVENT_TWG_COUNTER_VIEW=3015]="EVENT_TWG_COUNTER_VIEW",e[e.EVENT_TWG_SITE_SUPPORTER_WALL_VIEW=3016]="EVENT_TWG_SITE_SUPPORTER_WALL_VIEW",e[e.EVENT_TWG_STATIC_BUTTON_VIEW=3017]="EVENT_TWG_STATIC_BUTTON_VIEW",e[e.EVENT_TWG_DYNAMIC_BUTTON_VIEW=3018]="EVENT_TWG_DYNAMIC_BUTTON_VIEW",e[e.EVENT_TWG_PRE_TRANSACTION_PRIVACY_SETTING_PRIVATE=3019]="EVENT_TWG_PRE_TRANSACTION_PRIVACY_SETTING_PRIVATE",e[e.EVENT_TWG_POST_TRANSACTION_SETTING_PRIVATE=3020]="EVENT_TWG_POST_TRANSACTION_SETTING_PRIVATE",e[e.EVENT_TWG_PRE_TRANSACTION_PRIVACY_SETTING_PUBLIC=3021]="EVENT_TWG_PRE_TRANSACTION_PRIVACY_SETTING_PUBLIC",e[e.EVENT_TWG_POST_TRANSACTION_SETTING_PUBLIC=3022]="EVENT_TWG_POST_TRANSACTION_SETTING_PUBLIC",e[e.EVENT_REGWALL_OPTED_IN=3023]="EVENT_REGWALL_OPTED_IN",e[e.EVENT_NEWSLETTER_OPTED_IN=3024]="EVENT_NEWSLETTER_OPTED_IN",e[e.EVENT_SHOWCASE_METERING_INIT=3025]="EVENT_SHOWCASE_METERING_INIT",e[e.EVENT_DISABLE_MINIPROMPT_DESKTOP=3026]="EVENT_DISABLE_MINIPROMPT_DESKTOP",e[e.EVENT_SUBSCRIPTION_LINKING_SUCCESS=3027]="EVENT_SUBSCRIPTION_LINKING_SUCCESS",e[e.EVENT_SURVEY_SUBMITTED=3028]="EVENT_SURVEY_SUBMITTED",e[e.EVENT_LINK_ACCOUNT_SUCCESS=3029]="EVENT_LINK_ACCOUNT_SUCCESS",e[e.EVENT_SAVE_SUBSCRIPTION_SUCCESS=3030]="EVENT_SAVE_SUBSCRIPTION_SUCCESS",e[e.EVENT_SURVEY_DATA_TRANSFER_COMPLETE=3031]="EVENT_SURVEY_DATA_TRANSFER_COMPLETE",e[e.EVENT_RUNTIME_IS_READY=3032]="EVENT_RUNTIME_IS_READY",e[e.EVENT_START_API=3033]="EVENT_START_API",e[e.EVENT_SHOW_OFFERS_API=3034]="EVENT_SHOW_OFFERS_API",e[e.EVENT_SHOW_CONTRIBUTION_OPTIONS_API=3035]="EVENT_SHOW_CONTRIBUTION_OPTIONS_API",e[e.EVENT_SUBSCRIPTION_STATE=4e3]="EVENT_SUBSCRIPTION_STATE",e))(D||{}),y=(e=>(e[e.UNKNOWN_ENTITLEMENT_RESULT=0]="UNKNOWN_ENTITLEMENT_RESULT",e[e.UNLOCKED_SUBSCRIBER=1001]="UNLOCKED_SUBSCRIBER",e[e.UNLOCKED_FREE=1002]="UNLOCKED_FREE",e[e.UNLOCKED_METER=1003]="UNLOCKED_METER",e[e.LOCKED_REGWALL=2001]="LOCKED_REGWALL",e[e.LOCKED_PAYWALL=2002]="LOCKED_PAYWALL",e[e.INELIGIBLE_PAYWALL=2003]="INELIGIBLE_PAYWALL",e))(y||{}),h=(e=>(e[e.UNKNOWN_CLIENT=0]="UNKNOWN_CLIENT",e[e.SWG_CLIENT=1]="SWG_CLIENT",e[e.AMP_CLIENT=2]="AMP_CLIENT",e[e.PROPENSITY_CLIENT=3]="PROPENSITY_CLIENT",e[e.SWG_SERVER=4]="SWG_SERVER",e[e.PUBLISHER_CLIENT=5]="PUBLISHER_CLIENT",e[e.SHOWCASE_CLIENT=6]="SHOWCASE_CLIENT",e))(h||{});function v(...e){/swg.debug=1/.test(self.location.hash)&&(e.unshift("[Subscriptions]"),j(...e))}function j(...e){console.log(...e)}function W(...e){console.warn(...e)}function z(e,t="Assertion failed",...i){if(e)return;const o=t.split("%s");let n=o.shift();for(const a of i){const e=o.shift();n+=k(a)+e}throw new Error(n)}function k(e){const t=e;return 1==(null==t?void 0:t.nodeType)?t.tagName.toLowerCase()+(t.id?"#"+t.id:""):String(e)}const K=/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,x=self.document.createElement("a"),F={};function V(e){const t=F[e];if(t)return t;const i=function(e,t){e.href=t;const i={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:e.protocol+"//"+e.host};return e.origin&&"null"!==e.origin?i.origin=e.origin:"data:"!==i.protocol&&i.host||(i.origin=i.href),i}(x,e);return F[e]=i}function Y(e){return e?(/^[?#]/.test(e)?e.slice(1):e).split("&").reduce(((e,t)=>{const i=t.split("=");try{const t=decodeURIComponent(i[0]||""),o=decodeURIComponent(i[1]||"");t&&(e[t]=o)}catch(o){W(`SwG could not parse a URL query param: ${i[0]}`)}return e}),{}):{}}const $=V(self.window.location.href),H=V(self.document.referrer);var J=(e=>(e.IMPRESSION_PAYWALL="paywall",e.IMPRESSION_AD="ad_shown",e.IMPRESSION_OFFERS="offers_shown",e.ACTION_SUBSCRIPTIONS_LANDING_PAGE="subscriptions_landing_page",e.ACTION_OFFER_SELECTED="offer_selected",e.ACTION_PAYMENT_FLOW_STARTED="payment_flow_start",e.ACTION_PAYMENT_COMPLETED="payment_complete",e.EVENT_CUSTOM="custom",e))(J||{}),Z=(e=>(e.EVENT_SHOWCASE_METER_OFFERED="EVENT_SHOWCASE_METER_OFFERED",e.EVENT_SHOWCASE_UNLOCKED_BY_SUBSCRIPTION="EVENT_SHOWCASE_UNLOCKED_BY_SUBSCRIPTION",e.EVENT_SHOWCASE_UNLOCKED_BY_METER="EVENT_SHOWCASE_UNLOCKED_BY_METER",e.EVENT_SHOWCASE_UNLOCKED_FREE_PAGE="EVENT_SHOWCASE_UNLOCKED_FREE_PAGE",e.EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL="EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL",e.EVENT_SHOWCASE_INELIGIBLE_PAYWALL="EVENT_SHOWCASE_INELIGIBLE_PAYWALL",e.EVENT_SHOWCASE_NO_ENTITLEMENTS_PAYWALL="EVENT_SHOWCASE_NO_ENTITLEMENTS_PAYWALL",e))(Z||{});J.IMPRESSION_PAYWALL,D.IMPRESSION_PAYWALL,J.IMPRESSION_AD,D.IMPRESSION_AD,J.IMPRESSION_OFFERS,D.IMPRESSION_OFFERS,J.ACTION_SUBSCRIPTIONS_LANDING_PAGE,D.ACTION_SUBSCRIPTIONS_LANDING_PAGE,J.ACTION_OFFER_SELECTED,D.ACTION_OFFER_SELECTED,J.ACTION_PAYMENT_FLOW_STARTED,D.ACTION_PAYMENT_FLOW_STARTED,J.ACTION_PAYMENT_COMPLETED,D.ACTION_PAYMENT_COMPLETE,J.EVENT_CUSTOM,D.EVENT_CUSTOM,D.UNKNOWN,D.IMPRESSION_PAYWALL,J.IMPRESSION_PAYWALL,D.IMPRESSION_AD,J.IMPRESSION_AD,D.IMPRESSION_OFFERS,J.IMPRESSION_OFFERS,D.IMPRESSION_SUBSCRIBE_BUTTON,D.IMPRESSION_SMARTBOX,D.ACTION_SUBSCRIBE,D.ACTION_PAYMENT_COMPLETE,J.ACTION_PAYMENT_COMPLETED,D.ACTION_ACCOUNT_CREATED,D.ACTION_ACCOUNT_ACKNOWLEDGED,D.ACTION_SUBSCRIPTIONS_LANDING_PAGE,J.ACTION_SUBSCRIPTIONS_LANDING_PAGE,D.ACTION_PAYMENT_FLOW_STARTED,J.ACTION_PAYMENT_FLOW_STARTED,D.ACTION_OFFER_SELECTED,J.ACTION_OFFER_SELECTED,D.EVENT_PAYMENT_FAILED,D.EVENT_CUSTOM,J.EVENT_CUSTOM;const Q={[Z.EVENT_SHOWCASE_METER_OFFERED]:[D.EVENT_HAS_METERING_ENTITLEMENTS,D.EVENT_OFFERED_METER],[Z.EVENT_SHOWCASE_UNLOCKED_BY_SUBSCRIPTION]:[D.EVENT_UNLOCKED_BY_SUBSCRIPTION],[Z.EVENT_SHOWCASE_UNLOCKED_BY_METER]:[D.EVENT_HAS_METERING_ENTITLEMENTS,D.EVENT_UNLOCKED_BY_METER],[Z.EVENT_SHOWCASE_UNLOCKED_FREE_PAGE]:[D.EVENT_UNLOCKED_FREE_PAGE],[Z.EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL]:[D.EVENT_NO_ENTITLEMENTS,D.IMPRESSION_REGWALL,D.IMPRESSION_SHOWCASE_REGWALL],[Z.EVENT_SHOWCASE_NO_ENTITLEMENTS_PAYWALL]:[D.EVENT_NO_ENTITLEMENTS,D.IMPRESSION_PAYWALL],[Z.EVENT_SHOWCASE_INELIGIBLE_PAYWALL]:[D.EVENT_INELIGIBLE_PAYWALL,D.EVENT_NO_ENTITLEMENTS]};function X(e,t,i,o){return{eventCategory:e,eventAction:t,eventLabel:i,nonInteraction:o}}function q(e,t=!1){const i=Y(e);return!(!(i.gaa_at&&i.gaa_n&&i.gaa_sig&&i.gaa_ts)||!t&&"na"===i.gaa_at||parseInt(i.gaa_ts,16)<Date.now()/1e3)}function ee(e){(self.SWG=self.SWG||[]).push(e)}async function te(){await new Promise((e=>{const t=setInterval((()=>{self.gapi&&(clearInterval(t),e())}),50)})),await new Promise((e=>{self.gapi.load("auth2",e)})),self.gapi.auth2.getAuthInstance()||self.gapi.auth2.init()}function ie({analyticsEvent:e,showcaseEvent:t,isFromUserAction:i}){ee((async o=>{const n=await o.getEventManager(),a=t?Q[t]||[]:[e];for(const e of a)n.logEvent({eventType:e,eventOriginator:h.SWG_CLIENT,isFromUserAction:i,additionalParameters:null})}))}D.IMPRESSION_REGWALL,y.LOCKED_REGWALL,D.EVENT_UNLOCKED_BY_METER,y.UNLOCKED_METER,D.EVENT_UNLOCKED_BY_SUBSCRIPTION,y.UNLOCKED_SUBSCRIBER,D.EVENT_UNLOCKED_FREE_PAGE,y.UNLOCKED_FREE,D.IMPRESSION_PAYWALL,y.LOCKED_PAYWALL,D.EVENT_INELIGIBLE_PAYWALL,y.INELIGIBLE_PAYWALL,D.IMPRESSION_OFFERS,X("NTG paywall","paywall modal impression","",!0),D.IMPRESSION_CONTRIBUTION_OFFERS,X("NTG membership","offer impressions","",!0),D.ACTION_OFFER_SELECTED,X("NTG paywall","click","",!1),D.ACTION_SWG_SUBSCRIPTION_MINI_PROMPT_CLICK,X("NTG subscription","marketing modal click","",!1),D.IMPRESSION_SWG_SUBSCRIPTION_MINI_PROMPT,X("NTG subscription","marketing modal impression","",!0),D.ACTION_SWG_CONTRIBUTION_MINI_PROMPT_CLICK,X("NTG membership","marketing modal click","",!1),D.IMPRESSION_SWG_CONTRIBUTION_MINI_PROMPT,X("NTG membership","membership modal impression","",!0),D.IMPRESSION_NEWSLETTER_OPT_IN,X("NTG newsletter","newsletter modal impression","",!0),D.EVENT_NEWSLETTER_OPTED_IN,X("NTG newsletter","newsletter signup","success",!1),D.IMPRESSION_REGWALL_OPT_IN,X("NTG account","registration modal impression","",!0),D.EVENT_REGWALL_OPTED_IN,X("NTG account","registration","success",!1),D.ACTION_SURVEY_DATA_TRANSFER,X("","survey submission","",!1),D.ACTION_PAYMENT_COMPLETE,X("NTG subscription","submit","success",!1),D.ACTION_PAYMENT_COMPLETE,X("NTG membership","submit","success",!1);class oe{static getQueryString(){return self.location.search}}function ne(e,t,i,o){const n=e.createElement(t);return function(e,t={}){for(const[i,o]of Object.entries(t))e.setAttribute(i,o)}(n,i),o&&(n.textContent=o),n}function ae(e,t){var i;const o=ne(e.getWin().document,"style",{type:"text/css"});return o.textContent=t,null==(i=e.getHead())||i.appendChild(o),o}const re="en";function se(e,t){const i=e[re];if("object"!=typeof e||!t)return i;let o="string"==typeof t?t:le(t);o=o.toLowerCase(),o=o.replace(/_/g,"-");const n=o.split("-");for(;n.length;){const t=n.join("-");if(t in e)return e[t];n.pop()}return i}function le(e){var t,i;return e.lang?e.lang:(null==(i=null==(t=null==e?void 0:e.ownerDocument)?void 0:t.documentElement)?void 0:i.lang)?e.ownerDocument.documentElement.lang:re}function Ie(e){const t=function(e){return e.readyState}(e);return"loading"!==t&&"uninitialized"!==t}class _e{constructor(e){const t="document"in e;this.t=t?e:e.defaultView,this.i=t?e.document:e}getWin(){return this.t}getRootNode(){return this.i}getRootElement(){return this.i.documentElement}getHead(){return this.i.head}getBody(){return this.i.body}isReady(){return Ie(this.i)}async whenReady(){var e;await(e=this.i,new Promise((t=>{!function(e,t){!function(e,t,i){if(t(e))return void i(e);let o=!1;const n=()=>{t(e)&&!o&&(i(e),o=!0,e.removeEventListener("readystatechange",n))};e.addEventListener("readystatechange",n)}(e,Ie,t)}(e,t)})))}}function Te(e){return"nodeType"in e||"document"in e?new _e(e):e}function Ne(e){if("undefined"!=typeof TextDecoder)return new TextDecoder("utf-8").decode(e);const t=function(e){const t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=String.fromCharCode(e[i]);return t.join("")}(new Uint8Array(e));return decodeURIComponent(escape(t))}function ge(e){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++){const o=e.charCodeAt(i);z(o<=255,"Characters must be in range [0,255]"),t[i]=o}return t}(atob(e.replaceAll("-","+").replaceAll("_","/")))}function ce(e,t){try{return JSON.parse(e)}catch(i){return void(t&&t(i))}}class Ee{constructor(){}decode(e){return this.o(e).payload}o(e){function t(){throw new Error(`Invalid token: "${e}"`)}const i=e.split(".");3!=i.length&&t();const o=ge(i[0]),n=ge(i[1]);return{header:ce(Ne(o),t),payload:ce(Ne(n),t),verifiable:`${i[0]}.${i[1]}`,sig:i[2]}}}function ue(e,t){for(const[i,o]of Object.entries(t))e.style.setProperty(i,o.toString(),"important")}let Se=!1;class Le{static async show({iframeUrl:e,caslUrl:t}){if(!q(oe.getQueryString())){const e="[swg-gaa.js:GaaMeteringRegwall.show]: URL needs fresh GAA params.";return W(e),Promise.reject(e)}ie({showcaseEvent:Z.EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL,isFromUserAction:!1}),Le.l({iframeUrl:e,caslUrl:t}),Le.I({iframeUrl:e}),Le._();try{const e=await Le.T();return Le.remove(),e}catch(i){throw Le.remove(),i}}static async showWithNativeRegistrationButton({caslUrl:e,googleApiClientId:t,rawJwt:i=!0}){ie({showcaseEvent:Z.EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL,isFromUserAction:!1}),Le.l({iframeUrl:"",caslUrl:e,useNativeMode:!0});try{const e=await Le.createNativeRegistrationButton({googleApiClientId:t});if(Le.remove(),!e)throw new Error("Could not create native registration button.");return i?e:(new Ee).decode(e.credential)}catch(o){Le.remove(),v(`Regwall failed: ${o}`)}}static showWithNative3PRegistrationButton({caslUrl:e,authorizationUrl:t}){ie({showcaseEvent:Z.EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL,isFromUserAction:!1}),Le.l({iframeUrl:"",caslUrl:e,useNativeMode:!0}),Le.createNative3PRegistrationButton({authorizationUrl:t})}static remove(){const e=self.document.getElementById(r);e&&e.remove()}static async signOut(){await te(),await self.gapi.auth2.getAuthInstance().signOut()}static l({iframeUrl:e,caslUrl:t,useNativeMode:i=!1}){const o=le(self.document.body),n=Le.N(),a=/{PUBLICATION}/g,I=ne(self.document,"div",{id:r});ue(I,{all:"unset","background-color":"rgba(32, 33, 36, 0.6)",border:"none",bottom:"0",height:"100%",left:"0",opacity:"0","pointer-events":"none",position:"fixed",right:"0",transition:"opacity 0.5s",top:"0",width:"100%","z-index":"2147483646"});let _="";t&&(_=c.replace("$SHOWCASE_REGWALL_CASL$",se(d,o)).replace(/{LINK_START}/g,`<a href="${encodeURI(t)}" target="_blank">`).replace(/{LINK_END}/g,"</a>").replace(a,`<strong>${n}</strong>`));let E="";i?E=g:(e=function(e,t,i){const o=e.indexOf("?"),n=e.indexOf("#");let a="";return-1!=n&&(a=e.substring(n),e=e.substring(0,n)),-1==o?e+="?":o<e.length-1&&(e+="&"),(e+=encodeURIComponent("lang")+"="+encodeURIComponent(i))+a}(e,0,o),E=T.replace("$iframeUrl$",e)),I.innerHTML=N.replace("$SHOWCASE_REGISTRATION_BUTTON$",E).replace("$SHOWCASE_REGWALL_TITLE$",se(O,o)).replace("$SHOWCASE_REGWALL_DESCRIPTION$",se(C,o).replace(a,n)).replace("$SHOWCASE_REGWALL_PUBLISHER_SIGN_IN_BUTTON$",se(A,o)).replace("$SHOWCASE_REGWALL_CASL$",_),self.document.body.appendChild(I),I.offsetHeight,ue(I,{opacity:"1"}),Le.g();const u=self.document.getElementById(s);return null==u||u.addEventListener("animationend",(()=>{const e=self.document.getElementById(l);null==e||e.focus()})),I}static N(){const e=Le.u();if(e)return e;const t=Le.S();if(t)return t;throw new Error("Showcase articles must define a publisher name with either JSON-LD or Microdata.")}static u(){var e;const t=Array.prototype.slice.call(self.document.querySelectorAll('script[type="application/ld+json"]')).map((e=>JSON.parse(e.textContent)));for(let i=0;i<t.length;i++){const o=t[i],n=null==(e=null==o?void 0:o.publisher)?void 0:e.name;if(n)return n;o&&"object"==typeof o&&t.push(...Object.values(o))}}static S(){const e=self.document.querySelectorAll('[itemscope][itemtype][itemprop="publisher"] [itemprop="name"]');for(const t of Array.from(e)){const e=t.getAttribute("content");if(e)return e}}static g(){var e;null==(e=self.document.getElementById(o))||e.addEventListener("click",(e=>{e.preventDefault(),ie({analyticsEvent:D.ACTION_SHOWCASE_REGWALL_EXISTING_ACCOUNT_CLICK,isFromUserAction:!0}),ee((e=>e.triggerLoginRequest({linkRequested:!1})))}))}static T(){return new Promise(((e,t)=>{self.addEventListener("message",(i=>{i.data.stamp===R&&(i.data.command===f&&e(i.data.gaaUser||i.data.returnedJwt),i.data.command===M&&t("Google Sign-In could not render"))}))}))}static _(){Se||(Se=!0,self.addEventListener("message",(e=>{e.data.stamp===R&&e.data.command===P&&ie({analyticsEvent:D.ACTION_SHOWCASE_REGWALL_GSI_CLICK,isFromUserAction:!0}),e.data.stamp===R&&e.data.command===G&&ie({analyticsEvent:D.ACTION_SHOWCASE_REGWALL_SIWG_CLICK,isFromUserAction:!0}),e.data.stamp===R&&e.data.command===U&&ie({analyticsEvent:D.ACTION_SHOWCASE_REGWALL_3P_BUTTON_CLICK,isFromUserAction:!0})})))}static I({iframeUrl:e}){const t=self.document.getElementById(n);t.onload=()=>{var i;null==(i=t.contentWindow)||i.postMessage({stamp:R,command:p},new URL(e).origin)}}static createNativeRegistrationButton({googleApiClientId:e}){const t=le(self.document.body),o=self.document.getElementById(a);if(!o)return;const n=E.replace("$SHOWCASE_REGWALL_GOOGLE_SIGN_IN_BUTTON$",se(m,t));ae(Te(self.document),n);const r=ne(self.document,"div",{id:i,tabIndex:"0"});function s(){ie({analyticsEvent:D.ACTION_SHOWCASE_REGWALL_SIWG_CLICK,isFromUserAction:!0})}return o.appendChild(r),new Promise((t=>{self.google.accounts.id.initialize({client_id:e,callback:t}),self.google.accounts.id.renderButton(r,{type:"standard",theme:"outline",text:"continue_with",logo_alignment:"center",click_listener:s})}))}static createNative3PRegistrationButton({authorizationUrl:e}){const i=le(self.document.body),o=self.document.getElementById(a);if(!o)return;const n=S.replace("$SHOWCASE_REGWALL_GOOGLE_SIGN_IN_BUTTON$",se(m,i));ae(Te(self.document),n);const r=ne(self.document,"div",{id:t,tabIndex:"0"});r.innerHTML=L,o.appendChild(r),r.addEventListener("click",(()=>{ie({analyticsEvent:D.ACTION_SHOWCASE_REGWALL_3P_BUTTON_CLICK,isFromUserAction:!0}),self.setTimeout((()=>{self.open(e,"_parent")}),10)}))}}function Oe(e){let t;return t=e>=1e14||e<=-1e14?Math.floor(e/1e6):e>=1e11||e<=-3e10?Math.floor(e/1e3):e,t}class Ce{static getGaaUserPromise(){return new Promise((e=>{Ce.L=e}))}static setGaaUser(e){Ce.L(e)}static getLoginPromise(){return new Promise((e=>{Ce.O=e}))}static resolveLogin(){Ce.O()}static init(e){var t;if(!e||!Ce.validateParameters(e))return v("[gaa.js:GaaMetering.init]: Invalid params."),!1;const i=Ce.C(),{googleApiClientId:o,authorizationUrl:n,allowedReferrers:a,showcaseEntitlement:r,caslUrl:s,showPaywall:l,userState:I,handleSwGEntitlement:_,registerUserPromise:T,handleLoginPromise:N,publisherEntitlementPromise:g,rawJwt:c}=e;if(Ce.userState=I,Ce.publisherEntitlementPromise=g,!Ce.isGaa(a))return v("Extended Access - Invalid gaa parameters or referrer."),!1;const E=r&&!e.unlockArticle?()=>{}:e.unlockArticle,u=null==(t=e.shouldInitializeSwG)||t,S=Ce.determinePaywallType(e);async function L(){if(v("show Google Regwall"),await Ce.getOnReadyPromise(),o){const e=await Le.showWithNativeRegistrationButton({caslUrl:s,googleApiClientId:o,rawJwt:c});e&&Ce.setGaaUser(e);const t=await T;v("registerUserPromise resolved"),Ce.validateUserState(t)&&(Ce.userState=t,O())}else Le.showWithNative3PRegistrationButton({caslUrl:s,authorizationUrl:n})}function O(){var e;if(Ce.validateUserState(Ce.userState))if(!0===Ce.userState.granted){const e={[b.SUBSCRIBER]:Z.EVENT_SHOWCASE_UNLOCKED_BY_SUBSCRIPTION,[b.FREE]:Z.EVENT_SHOWCASE_UNLOCKED_FREE_PAGE,[b.METERING]:Z.EVENT_SHOWCASE_UNLOCKED_BY_METER};void 0!==b[Ce.userState.grantReason]&&ee((t=>{t.setShowcaseEntitlement({entitlement:e[Ce.userState.grantReason],isUserRegistered:Ce.isCurrentUserRegistered(),subscriptionTimestamp:Ce.getSubscriptionTimestamp()}),v("unlocked for "+Ce.userState.grantReason)})),E()}else(e=Ce.userState).registrationTimestamp?ee((t=>{v("getting entitlements from Google"),v(Ce.newUserStateToUserState(e));const i=t.getEntitlements(Ce.newUserStateToUserState(e));Ce.setEntitlements(i,a,E,_,L,l)})):L();else v("Invalid userState object")}return ee((async e=>{var t;u&&e.init(i),ie({analyticsEvent:D.EVENT_SHOWCASE_METERING_INIT,isFromUserAction:!1}),e.setOnLoginRequest((()=>Ce.handleLoginRequest(N,O))),e.setOnNativeSubscribeRequest((()=>l())),"granted"in I&&"grantReason"in I?O():Ce.A()?(Ce.userState.grantReason=b.FREE,Ce.userState.granted=!0,v("Article free from markup."),O()):S==B.SERVER_SIDE?(t=r)?(v(t),ee((e=>{e.consumeShowcaseEntitlementJwt(t,(()=>{E()}))}))):Ce.isCurrentUserRegistered()?(Ce.m(),v("User is not granted in userState and no showcaseEntitlement provided. Publisher renders a paywall.")):L():async function(){v("resolving publisherEntitlement");const e=await g;Ce.validateUserState(e)?(Ce.userState=e,O()):v("Publisher entitlement isn't valid")}()})),!0}static async handleLoginRequest(e,t){Ce.resolveLogin();const i=await e;return Ce.validateUserState(i)?(Ce.userState=i,Le.remove(),v("GaaMeteringRegwall removed"),t(),!0):(v("invalid handleLoginUserState"),!1)}static async m(){ee((e=>{Ce.userState.paywallReason===w.RESERVED_USER?e.setShowcaseEntitlement({entitlement:Z.EVENT_SHOWCASE_INELIGIBLE_PAYWALL,isUserRegistered:Ce.isCurrentUserRegistered(),subscriptionTimestamp:Ce.getSubscriptionTimestamp()}):e.setShowcaseEntitlement({entitlement:Z.EVENT_SHOWCASE_NO_ENTITLEMENTS_PAYWALL,isUserRegistered:Ce.isCurrentUserRegistered(),subscriptionTimestamp:Ce.getSubscriptionTimestamp()})}))}static async setEntitlements(e,t,i,o,n,a){const r=await e;r.enablesThisWithGoogleMetering()?r.consume((()=>{i(r)})):r.enablesThis()?o(r):!Ce.isCurrentUserRegistered()&&Ce.isGaa(t)?n():(Ce.m(),a())}static isCurrentUserRegistered(){return Ce.isUserRegistered(Ce.userState)}static isUserRegistered(e){return void 0!==e.id&&""!==e.id}static validateParameters(e){let t=!0;"googleApiClientId"in e&&"authorizationUrl"in e||!("googleApiClientId"in e)&&!("authorizationUrl"in e)?(v("Either googleApiClientId or authorizationUrl should be supplied but not both."),t=!1):"authorizationUrl"in e?"string"==typeof e.authorizationUrl&&V(e.authorizationUrl).href===e.authorizationUrl||(v("authorizationUrl is not a valid URL"),t=!1):"string"==typeof e.googleApiClientId&&-1!==e.googleApiClientId.indexOf(".apps.googleusercontent.com")||(v("Missing googleApiClientId, or it is not a string, or it is not in a correct format"),t=!1),"allowedReferrers"in e&&Array.isArray(e.allowedReferrers)||(v("Missing allowedReferrers or it is not an array"),t=!1);const i="showcaseEntitlement"in e?["showPaywall"]:["showPaywall","unlockArticle"];for(let n=0;n<i.length;n++)i[n]in e&&"function"==typeof e[i[n]]||(v(`Missing ${i[n]} or it is not a function`),t=!1);"handleSwGEntitlement"in e&&"function"!=typeof e.handleSwGEntitlement&&(v("handleSwGEntitlement is provided but it is not a function"),t=!1);const o="authorizationUrl"in e?["handleLoginPromise"]:["handleLoginPromise","registerUserPromise"];for(let n=0;n<o.length;n++)o[n]in e&&Ce.isPromise(e[o[n]])||(v(`Missing ${o[n]} or it is not a promise`),t=!1);if("publisherEntitlementPromise"in e&&!Ce.isPromise(e.publisherEntitlementPromise)&&(v("publisherEntitlementPromise is provided but it is not a promise"),t=!1),"userState"in e&&"object"!=typeof e.userState)v("userState is not an object"),t=!1;else if(e.paywallType==B.SERVER_SIDE||e.showcaseEntitlement)"userState"in e||(v("userState needs to be provided"),t=!1);else if("userState"in e||"publisherEntitlementPromise"in e){const i=e.userState;"granted"in i&&(!i.granted||Ce.A()||"grantReason"in i)||"publisherEntitlementPromise"in e||(v("Either granted and grantReason have to be supplied or you have to provide pubisherEntitlementPromise"),t=!1)}else v("userState or publisherEntitlementPromise needs to be provided"),t=!1;return"paywallType"in e&&!(e.paywallType in B)&&(v(`${e.paywallType} is not a valid paywallType`),t=!1),"shouldInitializeSwG"in e&&"boolean"!=typeof e.shouldInitializeSwG&&(v("shouldInitializeSwG is provided but the value is not a boolean"),t=!1),t}static determinePaywallType(e){var t;return e.showcaseEntitlement?B.SERVER_SIDE:null!=(t=e.paywallType)?t:B.CLIENT_SIDE}static isGaa(e=[]){if(!q(oe.getQueryString(),!0))return!1;const t=V(self.document.referrer);return!(!function(e=H){return function(e=$){return"https"===e.protocol||"https:"===e.protocol}(e)&&(t=e,K.test(t.hostname));var t}(t)&&-1===(null==e?void 0:e.indexOf(t.hostname))&&(v(`This page's referrer ("${t.origin}") can't grant Google Article Access.`),1))}static C(){const e=Ce.R();if(e)return e;const t=Ce.p();if(t)return t;throw new Error("Showcase articles must define a publisher ID with either JSON-LD or Microdata.")}static R(){var e;const t=Array.from(self.document.querySelectorAll('script[type="application/ld+json"]'));for(const i of t){let t=JSON.parse(i.textContent);Array.isArray(t)||(t=[t]);const o=null==(e=t.find((e=>{var t;return null==(t=null==e?void 0:e.isPartOf)?void 0:t.productID})))?void 0:e.isPartOf.productID;if(o)return o}}static p(){const e=Array.from(self.document.querySelectorAll('[itemscope][itemtype][itemprop="isPartOf"] [itemprop="productID"]'));for(const t of e){const e=t.getAttribute("content");if(e)return e}}static A(){return Ce.M()||Ce.P()||!1}static M(){var e;const t=Array.from(self.document.querySelectorAll('script[type="application/ld+json"]'));for(const i of t){let t=JSON.parse(i.textContent);Array.isArray(t)||(t=[t]);const o=null==(e=t.find((e=>null==e?void 0:e.isAccessibleForFree)))?void 0:e.isAccessibleForFree;if("boolean"==typeof o)return o;if("string"==typeof o)return"true"===o.toLowerCase()}return!1}static P(){const e=Array.from(self.document.querySelectorAll('[itemscope][itemtype] [itemprop="isAccessibleForFree"]'));for(const t of e){const e=t.getAttribute("content");if(v(typeof e),e)return"true"===e.toLowerCase()}return!1}static isPromise(e){return!!e&&"[object Promise]"===Object.prototype.toString.call(e)}static newUserStateToUserState(e){const t=Oe(e.registrationTimestamp);return{metering:{state:{id:e.id,standardAttributes:{registered_user:{timestamp:t}}}}}}static validateUserState(e){if(!e)return!1;let t=!0;if("granted"in e&&"boolean"==typeof e.granted||(v("userState.granted is missing or invalid (must be true or false)"),t=!1),!0!==e.granted||e.grantReason in b||(v("if userState.granted is true then userState.grantReason has to be either METERING, or SUBSCRIBER"),t=!1),!0===e.granted&&e.grantReason===b.SUBSCRIBER&&("id"in e&&"registrationTimestamp"in e?("number"!=typeof e.registrationTimestamp||e.registrationTimestamp%1!=0?(v("userState.registrationTimestamp invalid, userState.registrationTimestamp needs to be an integer and in seconds"),t=!1):Oe(e.registrationTimestamp)>Date.now()/1e3&&(v("userState.registrationTimestamp is in the future"),t=!1),e.grantReason===b.SUBSCRIBER&&("subscriptionTimestamp"in e?"number"!=typeof e.subscriptionTimestamp||e.subscriptionTimestamp%1!=0?(v("userState.subscriptionTimestamp invalid, userState.subscriptionTimestamp needs to be an integer and in seconds"),t=!1):Oe(e.subscriptionTimestamp)>Date.now()/1e3&&(v("userState.subscriptionTimestamp is in the future"),t=!1):(v("subscriptionTimestamp is required if userState.grantReason is SUBSCRIBER"),t=!1))):(v("Missing user ID or registrationTimestamp in userState object"),t=!1)),"id"in e||"registrationTimestamp"in e){if(!("id"in e))return v("Missing user ID in userState object"),!1;if(!("registrationTimestamp"in e))return v("Missing registrationTimestamp in userState object"),!1}return"paywallReason"in e&&(e.granted&&(v("userState.granted must be false when paywallReason is supplied."),t=!1),e.paywallReason in w||(v("userState.paywallReason has to be empty or set to RESERVED_USER."),t=!1)),t}static getOnReadyPromise(){return new Promise((e=>{"complete"===self.document.readyState?e():self.window.addEventListener("load",(()=>{e()}))}))}static getSubscriptionTimestamp(){var e;return(null==(e=null==Ce?void 0:Ce.userState)?void 0:e.subscriptionTimestamp)||null}}j("Subscriptions Showcase Version: 1.0.30"),self.GaaGoogleSignInButton=class{static async show({allowedOrigins:t}){const i=Y(oe.getQueryString()).lang||"en",o=u.replace("$SHOWCASE_REGWALL_GOOGLE_SIGN_IN_BUTTON$",se(m,i));ae(Te(self.document),o);const n=new Promise((e=>{self.addEventListener("message",(i=>{-1!==t.indexOf(i.origin)&&i.data.stamp===R&&i.data.command===p&&e((e=>{i.source.postMessage(e,i.origin)}))}))}));async function a(){(await n)({stamp:R,command:M})}for(const e of t){const t=new URL(e),i=t.origin===e,o="http:"===t.protocol||"https:"===t.protocol;if(!i||!o)return W(`[swg-gaa.js:GaaGoogleSignInButton.show]: You specified an invalid origin: ${e}`),void a()}try{await te();const t=ne(self.document,"div",{id:e,tabIndex:"0"});self.document.body.appendChild(t),t.addEventListener("click",(async()=>{(await n)({stamp:R,command:P})}));const i=await new Promise((t=>{self.gapi.signin2.render(e,{longtitle:!0,onsuccess:t,prompt:"select_account",scope:"profile email",theme:"dark"})})),o=i.getBasicProfile(),a=i.getAuthResponse(!0),r={idToken:a.id_token,name:o.getName(),givenName:o.getGivenName(),familyName:o.getFamilyName(),imageUrl:o.getImageUrl(),email:o.getEmail(),authorizationData:a};(await n)({stamp:R,command:f,gaaUser:r})}catch(r){a()}}},self.GaaGoogle3pSignInButton=class{static show({allowedOrigins:e,authorizationUrl:i,redirectMode:o=!1}){const n=Y(oe.getQueryString()).lang||"en",a=S.replace("$SHOWCASE_REGWALL_GOOGLE_SIGN_IN_BUTTON$",se(m,n));ae(Te(self.document),a);const r=ne(self.document,"div",{id:t,tabIndex:"0"});r.innerHTML=L,r.onclick=async()=>{(await s)({stamp:R,command:U}),o?self.setTimeout((()=>{self.open(i,"_parent")}),10):self.open(i)},self.document.body.appendChild(r);const s=new Promise((t=>{self.addEventListener("message",(i=>{-1!==e.indexOf(i.origin)&&i.data.stamp===R&&i.data.command===p&&t((e=>{i.source.postMessage(e,i.origin)}))}))}));async function l(){(await s)({stamp:R,command:M})}for(let t=0;t<e.length;t++){const i=e[t],o=new URL(i),n=o.origin===i,a="http:"===o.protocol||"https:"===o.protocol;if(!n||!a)return W(`[swg-gaa.js:GaaGoogle3pSignInButton.show]: You specified an invalid origin: ${i}`),void l()}self.addEventListener("message",(t=>{-1!==e.indexOf(t.origin)&&t.data.stamp===R&&t.data.command===f&&self.parent.postMessage(t.data,t.origin)}))}static gaaNotifySignIn({gaaUser:e}){self.opener.postMessage({stamp:R,command:f,gaaUser:e})}},self.GaaSignInWithGoogleButton=class{static async show({clientId:e,allowedOrigins:t,rawJwt:o=!1}){const n=Y(oe.getQueryString()).lang||"en",a=u.replace("$SHOWCASE_REGWALL_GOOGLE_SIGN_IN_BUTTON$",se(m,n));ae(Te(self.document),a);const r=new Promise((e=>{self.addEventListener("message",(i=>{-1!==t.indexOf(i.origin)&&i.data.stamp===R&&i.data.command===p&&e((e=>{i.source.postMessage(e,i.origin)}))}))}));async function s(){(await r)({stamp:R,command:M})}async function l(){(await r)({stamp:R,command:G})}for(let i=0;i<t.length;i++){const e=t[i],o=new URL(e),n=o.origin===e,a="http:"===o.protocol||"https:"===o.protocol;if(!n||!a)return W(`[swg-gaa.js:GaaSignInWithGoogleButton.show]: You specified an invalid origin: ${e}`),void s()}try{const n=ne(self.document,"div",{id:i,tabIndex:"0"});self.document.body.appendChild(n);const a=await new Promise((o=>{self.google.accounts.id.initialize({client_id:e,callback:o,allowed_parent_origin:t}),self.google.accounts.id.renderButton(self.document.getElementById(i),{type:"standard",theme:"outline",text:"continue_with",logo_alignment:"center",width:n.offsetWidth,height:n.offsetHeight,click_listener:l})})),s=(new Ee).decode(a.credential),I=o?a:s;(await r)({stamp:R,command:f,jwtPayload:s,returnedJwt:I})}catch(I){s()}}},self.GaaMeteringRegwall=Le,self.GaaMetering=Ce}();
//# sourceMappingURL=swg-gaa.js.map
