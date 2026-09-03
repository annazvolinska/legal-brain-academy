/* @ds-bundle: {"format":4,"namespace":"LegalNodesDesignSystem_0002bb","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"LBALogo","sourcePath":"components/brand/LBALogo.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"ProcessStep","sourcePath":"components/content/ProcessStep.jsx"},{"name":"StatTile","sourcePath":"components/content/StatTile.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"8ea4d8ae013e","components/brand/Icon.jsx":"94841c802261","components/brand/LBALogo.jsx":"5c60012e5858","components/brand/Logo.jsx":"7c30fe5b0823","components/content/Badge.jsx":"85f1cea27def","components/content/Card.jsx":"462ad49173e7","components/content/ProcessStep.jsx":"b8a4cadf17b7","components/content/StatTile.jsx":"c27e306600f7","components/forms/Input.jsx":"876236b0acee","ui_kits/marketing/Marketing.jsx":"2668d20027c7","ui_kits/marketing/Sections.jsx":"dae96efd36be"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LegalNodesDesignSystem_0002bb = window.LegalNodesDesignSystem_0002bb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: '12px',
    radius: 'var(--radius-sm)'
  },
  md: {
    padding: '12px 22px',
    fontSize: '13px',
    radius: 'var(--radius-sm)'
  },
  lg: {
    padding: '16px 30px',
    fontSize: '14px',
    radius: 'var(--radius-md)'
  }
};
const variants = {
  primary: {
    background: 'var(--ln-yellow)',
    color: 'var(--ln-green)',
    border: '1px solid var(--ln-yellow)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--ln-green)',
    border: '1px solid var(--ln-green)'
  },
  'secondary-invert': {
    background: 'transparent',
    color: 'var(--ln-white)',
    border: '1px solid rgba(255,255,255,0.55)'
  },
  dark: {
    background: '#111111',
    color: 'var(--ln-white)',
    border: '1px solid #111111'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ln-green)',
    border: '1px solid transparent'
  }
};

/**
 * Legal Nodes primary action. Yellow-fill CTA is the hero variant; keep it special.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  uppercase = true,
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sz = sizes[size] || sizes.md;
  const vr = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: sz.fontSize,
    letterSpacing: uppercase ? '0.12em' : '0.01em',
    textTransform: uppercase ? 'uppercase' : 'none',
    padding: sz.padding,
    borderRadius: sz.radius,
    width: fullWidth ? '100%' : 'auto',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard)',
    transform: active && !disabled ? 'scale(0.98)' : 'scale(1)',
    filter: hover && !disabled ? 'brightness(0.94)' : 'none',
    whiteSpace: 'nowrap',
    ...vr,
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Legal Nodes icon wrapper. INTENTIONAL ADDITION — the sources ship no icon set,
 * so we standardise on Lucide (thin line icons matching the brand's minimal
 * line-icon direction). Renders a Lucide <i data-lucide> element.
 * Requires the Lucide CDN script + a lucide.createIcons() call on the page.
 */
function Icon({
  name,
  size = 22,
  strokeWidth = 1.75,
  color = 'currentColor',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    "data-lucide": name,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      strokeWidth,
      verticalAlign: 'middle',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/LBALogo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Symbol geometry extracted from the Legal Brain Academy identity PDF
// (symbol user space: 5 nodes, 6 connections, LW 8, round caps).
const A = [14, 14],
  B = [69, 36.25],
  C = [14, 58.5],
  D = [69, 80.75],
  E = [14, 103];
const R = 10,
  RA = 13,
  SW = 8;

/**
 * Legal Brain Academy logo — "Connected Brain".
 * Five nodes and six connections resolve into a hidden capital B.
 * One larger Soft Mint node (plus its single mint connection) is the only accent.
 */
function LBALogo({
  variant = 'horizontal',
  // 'horizontal' | 'stacked' | 'symbol' | 'avatar'
  tone = 'teal',
  // 'teal' | 'white' | 'mono-teal' | 'mono-white'
  height,
  endorsement = true,
  style = {},
  ...rest
}) {
  const white = tone === 'white' || tone === 'mono-white';
  const mono = tone.startsWith('mono');
  const ink = white ? 'var(--lba-white)' : 'var(--lba-teal)';
  const accent = mono ? ink : 'var(--lba-mint)';
  const symH = height || (variant === 'symbol' || variant === 'avatar' ? 64 : variant === 'stacked' ? 72 : 56);

  // Brand floor: minimum horizontal lockup width is 240px (identity doc).
  // With the endorsement shown that lands at symbol height 66.
  if (variant === 'horizontal' && endorsement && symH < 66 && typeof console !== 'undefined') {
    console.warn(`LBALogo: height=${symH} renders the horizontal lockup below the 240px minimum width. Use height={66} or greater.`);
  }
  const Symbol = /*#__PURE__*/React.createElement("svg", {
    width: 86 / 117 * symH,
    height: symH,
    viewBox: "0 0 86 117",
    fill: "none",
    style: {
      flex: 'none',
      display: 'block'
    }
  }, [[A, C, ink], [C, E, ink], [A, B, ink], [C, B, ink], [C, D, accent], [E, D, ink]].map(([p, q, c], i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: p[0],
    y1: p[1],
    x2: q[0],
    y2: q[1],
    stroke: c,
    strokeWidth: SW,
    strokeLinecap: "round"
  })), [[A, R, ink], [B, R, ink], [C, R, ink], [E, R, ink], [D, RA, accent]].map(([p, r, c], i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: r,
    fill: c
  })));
  if (variant === 'symbol') return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      ...style
    }
  }, rest), Symbol);
  if (variant === 'avatar') {
    const s = height || 96;
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: s,
        height: s,
        borderRadius: s * 0.234,
        background: 'var(--lba-teal)',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("svg", {
      width: 86 / 117 * s * 0.55,
      height: s * 0.55,
      viewBox: "0 0 86 117",
      fill: "none"
    }, [[A, C, '#fff'], [C, E, '#fff'], [A, B, '#fff'], [C, B, '#fff'], [C, D, mono ? '#fff' : 'var(--lba-mint)'], [E, D, '#fff']].map(([p, q, c], i) => /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: p[0],
      y1: p[1],
      x2: q[0],
      y2: q[1],
      stroke: c,
      strokeWidth: SW,
      strokeLinecap: "round"
    })), [[A, R, '#fff'], [B, R, '#fff'], [C, R, '#fff'], [E, R, '#fff'], [D, RA, mono ? '#fff' : 'var(--lba-mint)']].map(([p, r, c], i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: p[0],
      cy: p[1],
      r: r,
      fill: c
    }))));
  }
  const nameSize = symH * 0.42;
  const Wordmark = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: symH * 0.055,
      textAlign: variant === 'stacked' ? 'center' : 'left',
      alignItems: variant === 'stacked' ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--lba-font-display)',
      fontWeight: 700,
      fontSize: nameSize,
      lineHeight: 1,
      color: ink,
      whiteSpace: 'nowrap'
    }
  }, "LEGAL BRAIN"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--lba-font-display)',
      fontWeight: 400,
      fontSize: nameSize * 0.5,
      letterSpacing: 'var(--lba-ls-academy)',
      lineHeight: 1,
      color: ink,
      whiteSpace: 'nowrap'
    }
  }, "ACADEMY"), endorsement && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: symH * 0.1,
      marginTop: symH * 0.09,
      width: '100%',
      justifyContent: variant === 'stacked' ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: variant === 'stacked' ? '0 0 ' + symH * 0.22 + 'px' : 'none',
      width: variant === 'stacked' ? undefined : symH * 0.22,
      background: accent
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--lba-font-display)',
      fontWeight: 400,
      fontSize: nameSize * 0.34,
      lineHeight: 1,
      color: ink,
      whiteSpace: 'nowrap',
      opacity: 0.9
    }
  }, "by ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700
    }
  }, "Legal Nodes")), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      width: symH * 0.22,
      background: accent
    }
  })));
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: variant === 'stacked' ? 'column' : 'row',
      alignItems: 'center',
      gap: variant === 'stacked' ? symH * 0.3 : symH * 0.34,
      ...style
    }
  }, rest), Symbol, Wordmark);
}
Object.assign(__ds_scope, { LBALogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LBALogo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Inline SVG so the mark renders without external asset resolution.
const LETTERS = ['M117.38 137V203.301H105.363V137H117.38Z', 'M180.006 184.571C178.901 188.438 177.022 191.919 174.37 195.013C171.718 198.107 168.541 200.538 164.839 202.306C161.193 204.019 157.27 204.876 153.071 204.876C147.988 204.876 143.264 203.605 138.899 201.063C134.589 198.522 131.164 195.096 128.622 190.787C126.081 186.422 124.81 181.698 124.81 176.615C124.81 171.532 126.081 166.835 128.622 162.526C131.164 158.216 134.589 154.818 138.899 152.332C143.264 149.791 147.988 148.52 153.071 148.52C157.657 148.52 162.104 149.68 166.414 152.001C170.723 154.321 174.232 157.636 176.939 161.946C179.702 166.255 181.083 171.255 181.083 176.946C181.083 178.549 181.028 179.764 180.917 180.593H137.656C138.429 184.516 140.253 187.748 143.126 190.289C146.054 192.831 149.369 194.102 153.071 194.102C156.11 194.102 158.872 193.245 161.358 191.532C163.9 189.82 165.806 187.499 167.077 184.571H180.006ZM167.74 170.565C166.635 167.139 164.756 164.404 162.104 162.36C159.452 160.316 156.441 159.294 153.071 159.294C149.7 159.294 146.634 160.343 143.872 162.443C141.164 164.487 139.258 167.222 138.153 170.648L167.74 170.565Z', 'M230.5 219.876L230.167 212.904L230.5 211.845C232.71 211.845 228.677 209.772 230.5 208.667C232.379 207.618 230.862 205.124 231.912 203.301C233.017 201.478 230.112 199.35 230.167 197.251C228.399 199.295 226.051 201.091 223.122 202.638C220.194 204.13 216.713 204.876 212.68 204.876C207.597 204.876 203.011 203.632 198.923 201.146C194.889 198.605 191.74 195.179 189.475 190.869C187.209 186.505 186.077 181.753 186.077 176.615C186.077 171.532 187.348 166.835 189.889 162.526C192.431 158.216 195.856 154.818 200.166 152.332C204.531 149.791 209.255 148.52 214.338 148.52C219.421 148.52 224.034 149.791 228.178 152.332C232.377 154.874 235.664 158.299 238.04 162.609C240.471 166.863 241.687 171.532 241.687 176.615V197.831C241.687 204.737 240.032 206.196 240.032 213.61C236.22 217.533 246.217 219.876 238.04 219.876H230.5ZM198.508 176.615C198.508 179.875 199.227 182.83 200.663 185.483C202.1 188.135 204.033 190.234 206.464 191.781C208.895 193.328 211.52 194.102 214.338 194.102C217.155 194.102 219.78 193.328 222.211 191.781C224.642 190.234 226.576 188.135 228.012 185.483C229.449 182.83 230.167 179.875 230.167 176.615C230.167 173.41 229.449 170.482 228.012 167.83C226.576 165.178 224.642 163.106 222.211 161.614C219.78 160.067 217.155 159.294 214.338 159.294C211.52 159.294 208.895 160.067 206.464 161.614C204.033 163.106 202.1 165.178 200.663 167.83C199.227 170.482 198.508 173.41 198.508 176.615Z', 'M294.417 203.301V197.997C293.035 199.654 290.715 201.229 287.455 202.721C284.251 204.157 280.908 204.876 277.427 204.876C272.841 204.876 268.504 203.605 264.415 201.063C260.327 198.522 257.04 195.096 254.553 190.787C252.067 186.422 250.824 181.698 250.824 176.615C250.824 171.532 252.095 166.835 254.636 162.526C257.178 158.216 260.603 154.818 264.913 152.332C269.278 149.791 274.001 148.52 279.085 148.52C284.168 148.52 288.781 149.791 292.925 152.332C297.124 154.818 300.411 158.216 302.787 162.526C305.218 166.835 306.434 171.532 306.434 176.615V203.301H294.417ZM263.255 176.615C263.255 179.875 263.973 182.83 265.41 185.483C266.847 188.135 268.78 190.234 271.211 191.781C273.642 193.328 276.267 194.102 279.085 194.102C281.902 194.102 284.527 193.328 286.958 191.781C289.389 190.234 291.323 188.135 292.759 185.483C294.196 182.83 294.914 179.875 294.914 176.615C294.914 173.41 294.196 170.482 292.759 167.83C291.323 165.178 289.389 163.106 286.958 161.614C284.527 160.067 281.902 159.294 279.085 159.294C276.267 159.294 273.642 160.067 271.211 161.614C268.78 163.106 266.847 165.178 265.41 167.83C263.973 170.482 263.255 173.41 263.255 176.615Z', 'M327.565 137V203.301H315.548V137H327.565Z', 'M105.874 242.848C105.874 238.98 104.742 235.886 102.476 233.565C100.211 231.19 97.2275 230.002 93.5257 230.002C89.8239 230.002 86.8404 231.19 84.5751 233.565C82.3098 235.886 81.1772 238.98 81.1772 242.848V274.341H69.1602V242.848C69.1602 238.207 70.1547 234.118 72.1437 230.582C74.188 226.991 77.061 224.2 80.7628 222.211C84.4646 220.222 88.7189 219.228 93.5257 219.228C98.3326 219.228 102.587 220.222 106.289 222.211C109.99 224.2 112.836 226.991 114.825 230.582C116.869 234.118 117.891 238.207 117.891 242.848V274.341H105.874V242.848Z', 'M152.822 275.915C147.739 275.915 143.015 274.644 138.65 272.103C134.34 269.561 130.915 266.136 128.373 261.826C125.832 257.461 124.561 252.737 124.561 247.654C124.561 242.571 125.832 237.875 128.373 233.565C130.915 229.256 134.34 225.858 138.65 223.372C143.015 220.83 147.739 219.559 152.822 219.559C157.905 219.559 162.601 220.83 166.911 223.372C171.275 225.858 174.729 229.256 177.27 233.565C179.812 237.875 181.082 242.571 181.082 247.654C181.082 252.737 179.812 257.461 177.27 261.826C174.729 266.136 171.275 269.561 166.911 272.103C162.601 274.644 157.905 275.915 152.822 275.915ZM136.992 247.654C136.992 250.914 137.711 253.87 139.147 256.522C140.584 259.174 142.517 261.274 144.948 262.821C147.379 264.368 150.004 265.141 152.822 265.141C155.639 265.141 158.264 264.368 160.695 262.821C163.126 261.274 165.06 259.174 166.496 256.522C167.933 253.87 168.651 250.914 168.651 247.654C168.651 244.45 167.933 241.522 166.496 238.87C165.06 236.218 163.126 234.146 160.695 232.654C158.264 231.107 155.639 230.333 152.822 230.333C150.004 230.333 147.379 231.107 144.948 232.654C142.517 234.146 140.584 236.218 139.147 238.87C137.711 241.522 136.992 244.45 136.992 247.654Z', 'M241.68 247.82C241.68 252.903 240.465 257.6 238.034 261.909C235.658 266.219 232.371 269.644 228.172 272.186C224.028 274.672 219.414 275.915 214.331 275.915C209.248 275.915 204.524 274.672 200.159 272.186C195.85 269.644 192.424 266.219 189.883 261.909C187.341 257.6 186.071 252.903 186.071 247.82C186.071 242.737 187.314 238.041 189.8 233.731C192.286 229.366 195.574 225.913 199.662 223.372C203.751 220.83 208.088 219.559 212.674 219.559C216.155 219.559 219.497 220.305 222.702 221.797C225.962 223.234 228.282 224.781 229.663 226.438V188.381L241.68 189.116V247.82ZM198.502 247.82C198.502 251.025 199.22 253.953 200.657 256.605C202.093 259.257 204.027 261.357 206.458 262.904C208.889 264.395 211.513 265.141 214.331 265.141C217.149 265.141 219.773 264.395 222.205 262.904C224.636 261.357 226.569 259.257 228.006 256.605C229.442 253.953 230.161 251.025 230.161 247.82C230.161 244.56 229.442 241.604 228.006 238.952C226.569 236.3 224.636 234.201 222.205 232.654C219.773 231.107 217.149 230.333 214.331 230.333C211.513 230.333 208.889 231.107 206.458 232.654C204.027 234.201 202.093 236.3 200.657 238.952C199.22 241.604 198.502 244.56 198.502 247.82Z', 'M303.504 255.611C302.399 259.478 300.521 262.959 297.868 266.053C295.216 269.147 292.04 271.578 288.338 273.346C284.691 275.059 280.768 275.915 276.569 275.915C271.486 275.915 266.762 274.644 262.397 272.103C258.088 269.561 254.662 266.136 252.121 261.826C249.579 257.461 248.309 252.737 248.309 247.654C248.309 242.571 249.579 237.875 252.121 233.565C254.662 229.256 258.088 225.858 262.397 223.372C266.762 220.83 271.486 219.559 276.569 219.559C281.155 219.559 285.603 220.72 289.912 223.04C294.222 225.361 297.73 228.676 300.438 232.985C303.2 237.295 304.581 242.295 304.581 247.986C304.581 249.588 304.526 250.804 304.416 251.632H261.154C261.928 255.555 263.751 258.787 266.624 261.329C269.552 263.871 272.868 265.141 276.569 265.141C279.608 265.141 282.371 264.285 284.857 262.572C287.398 260.859 289.305 258.539 290.575 255.611H303.504ZM291.238 241.604C290.133 238.179 288.255 235.444 285.603 233.4C282.951 231.355 279.94 230.333 276.569 230.333C273.199 230.333 270.133 231.383 267.37 233.483C264.663 235.527 262.757 238.262 261.652 241.687L291.238 241.604Z', 'M320.764 255.528C320.764 258.456 321.592 260.804 323.25 262.572C324.963 264.34 327.477 265.224 330.792 265.224C333.333 265.224 335.35 264.672 336.842 263.567C338.389 262.406 339.162 260.97 339.162 259.257C339.162 257.655 338.665 256.384 337.67 255.445C336.676 254.45 335.433 253.704 333.941 253.207C332.504 252.655 330.46 252.019 327.808 251.301C324.162 250.417 321.178 249.478 318.858 248.483C316.537 247.489 314.548 245.914 312.89 243.759C311.233 241.604 310.404 238.676 310.404 234.974C310.404 231.991 311.261 229.311 312.973 226.935C314.686 224.504 317.007 222.598 319.935 221.217C322.918 219.836 326.261 219.145 329.963 219.145C333.665 219.145 337.035 219.919 340.074 221.466C343.168 222.957 345.571 225.002 347.284 227.598C349.052 230.195 349.936 233.013 349.936 236.052H337.505C337.505 234.449 336.759 233.041 335.267 231.825C333.83 230.554 332.062 229.919 329.963 229.919C327.808 229.919 326.012 230.416 324.576 231.411C323.139 232.35 322.421 233.538 322.421 234.974C322.421 236.356 322.918 237.488 323.913 238.372C324.907 239.256 326.151 239.975 327.642 240.527C329.134 241.08 331.178 241.687 333.775 242.35C337.532 243.345 340.599 244.339 342.974 245.334C345.35 246.273 347.367 247.765 349.024 249.809C350.737 251.853 351.594 254.561 351.594 257.931C351.594 261.357 350.654 264.451 348.776 267.213C346.897 269.921 344.3 272.075 340.985 273.678C337.726 275.225 334.051 275.998 329.963 275.998C325.985 275.998 322.366 275.114 319.106 273.346C315.902 271.523 313.36 269.064 311.482 265.97C309.658 262.876 308.747 259.395 308.747 255.528H320.764Z'];

/**
 * Legal Nodes logo. Stacked "legal nodes" wordmark, or circular badge.
 * Colour follows `tone`: white for dark surfaces, green for light.
 */
function Logo({
  tone = 'white',
  variant = 'wordmark',
  height = 40,
  style = {},
  ...rest
}) {
  const fill = tone === 'white' ? '#FFFFFF' : tone === 'green' ? '#0F2F36' : '#111111';
  if (variant === 'circle') {
    const size = height;
    const inner = tone === 'white' ? '#111111' : '#0F2F36';
    return /*#__PURE__*/React.createElement("svg", _extends({
      width: size,
      height: size,
      viewBox: "0 0 420 420",
      fill: "none",
      style: style
    }, rest), /*#__PURE__*/React.createElement("rect", {
      width: "420",
      height: "420",
      rx: "210",
      fill: "#FFFFFF"
    }), /*#__PURE__*/React.createElement("g", {
      fill: inner
    }, LETTERS.map((d, i) => /*#__PURE__*/React.createElement("path", {
      key: i,
      d: d
    }))));
  }
  const w = 294 / 150 * height;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: w,
    height: height,
    viewBox: "64 132 294 150",
    fill: "none",
    style: style
  }, rest), /*#__PURE__*/React.createElement("g", {
    fill: fill
  }, LETTERS.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d
  }))));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tints = {
  yellow: {
    background: 'var(--ln-tint-yellow)',
    color: 'var(--ln-green)',
    border: 'transparent'
  },
  orange: {
    background: 'var(--ln-tint-orange)',
    color: 'var(--ln-green)',
    border: 'transparent'
  },
  blue: {
    background: 'var(--ln-tint-blue)',
    color: 'var(--ln-green)',
    border: 'transparent'
  },
  pink: {
    background: 'var(--ln-tint-pink)',
    color: 'var(--ln-green)',
    border: 'transparent'
  },
  gray: {
    background: 'var(--ln-tint-gray)',
    color: 'var(--ln-green)',
    border: 'transparent'
  },
  solid: {
    background: 'var(--ln-green)',
    color: 'var(--ln-white)',
    border: 'transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: 'var(--ln-gray-300)'
  }
};

/**
 * Legal Nodes badge / chip. Category tags and credit counters in decks & app.
 */
function Badge({
  children,
  tint = 'gray',
  size = 'md',
  style = {},
  ...rest
}) {
  const t = tints[tint] || tints.gray;
  const pad = size === 'sm' ? '3px 8px' : '5px 12px';
  const fs = size === 'sm' ? '11px' : '12.5px';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: fs,
      lineHeight: 1,
      padding: pad,
      borderRadius: 'var(--radius-xs)',
      background: t.background,
      color: t.color,
      border: `1px solid ${t.border}`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const surfaces = {
  light: {
    background: 'var(--ln-white)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-light)'
  },
  muted: {
    background: 'var(--ln-mist-2)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-light)'
  },
  dark: {
    background: 'var(--ln-green)',
    color: 'var(--ln-white)',
    border: '1px solid var(--border-dark)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid var(--border-light)'
  }
};

/**
 * Legal Nodes card. Clean hairline border, minimal/no shadow, consistent padding.
 */
function Card({
  children,
  variant = 'light',
  padding = 'var(--space-6)',
  radius = 'var(--radius-lg)',
  hover = false,
  elevated = false,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const sf = surfaces[variant] || surfaces.light;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      borderRadius: radius,
      padding,
      boxShadow: elevated ? 'var(--shadow-card)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
      transform: hover && h ? 'translateY(-2px)' : 'none',
      boxSizing: 'border-box',
      ...sf,
      ...(hover && h ? {
        boxShadow: 'var(--shadow-card)'
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Legal Nodes numbered process step — the "01 Submit a Request" row.
 * Active step is dark/emphasised; upcoming steps are muted.
 */
function ProcessStep({
  index,
  title,
  active = false,
  invert = false,
  arrow = true,
  style = {},
  ...rest
}) {
  const num = typeof index === 'number' ? String(index).padStart(2, '0') : index;
  const baseText = invert ? '#fff' : 'var(--ln-ink)';
  const mutedText = invert ? 'rgba(255,255,255,0.45)' : 'var(--ln-gray-300)';
  const color = active ? baseText : mutedText;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '18px',
      padding: '10px 0',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '18px',
      color,
      width: '20px',
      flex: 'none'
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '22px',
      fontWeight: 800,
      color,
      width: '38px',
      flex: 'none',
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '18px',
      fontWeight: 700,
      color,
      textTransform: 'uppercase',
      letterSpacing: '0.02em'
    }
  }, title));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/content/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Legal Nodes metric tile — the dashboard-widget stat with optional progress.
 * Mirrors the hero "Documents Approved / Credits / Steps Complete" cards.
 */
function StatTile({
  label,
  value,
  suffix,
  hint,
  progress = null,
  // 0..1 to show a progress bar
  variant = 'light',
  // 'light' | 'dark' | 'accent'
  status,
  // small status word, e.g. "On Track"
  style = {},
  ...rest
}) {
  const schemes = {
    light: {
      bg: 'var(--ln-white)',
      fg: 'var(--ln-green)',
      sub: 'var(--text-muted)',
      track: 'var(--ln-gray-200)',
      fill: 'var(--ln-green)',
      border: '1px solid var(--border-light)'
    },
    dark: {
      bg: 'var(--ln-green)',
      fg: '#fff',
      sub: 'rgba(255,255,255,0.65)',
      track: 'rgba(255,255,255,0.18)',
      fill: 'var(--ln-yellow)',
      border: '1px solid var(--border-dark)'
    },
    accent: {
      bg: 'var(--ln-slate)',
      fg: '#fff',
      sub: 'rgba(255,255,255,0.75)',
      track: 'rgba(255,255,255,0.25)',
      fill: '#fff',
      border: '1px solid transparent'
    }
  };
  const s = schemes[variant] || schemes.light;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: s.bg,
      border: s.border,
      borderRadius: 'var(--radius-md)',
      padding: '16px 18px',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: s.sub,
      fontWeight: 500
    }
  }, label), status && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: s.sub,
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, status)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '4px',
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '30px',
      fontWeight: 800,
      color: s.fg,
      lineHeight: 1,
      letterSpacing: '-0.01em'
    }
  }, value), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15px',
      fontWeight: 600,
      color: s.sub
    }
  }, suffix)), progress != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14px',
      height: '6px',
      borderRadius: 'var(--radius-pill)',
      background: s.track,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.max(0, Math.min(1, progress)) * 100}%`,
      height: '100%',
      background: s.fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-standard)'
    }
  })), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      fontSize: '12px',
      color: s.sub
    }
  }, hint));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Legal Nodes form field. Underline style mirrors the lead-capture forms;
 * boxed style for denser app forms.
 */
function Input({
  label,
  placeholder = 'Type your answer here...',
  value,
  onChange,
  type = 'text',
  required = false,
  variant = 'underline',
  invert = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const labelColor = invert ? 'rgba(255,255,255,0.9)' : 'var(--ln-ink)';
  const textColor = invert ? '#fff' : 'var(--ln-gray-700)';
  const line = invert ? 'rgba(255,255,255,0.35)' : 'var(--ln-gray-300)';
  const focusColor = 'var(--ln-green)';
  const fieldBase = {
    fontFamily: 'var(--font-sans)',
    fontSize: '16px',
    color: textColor,
    width: '100%',
    background: 'transparent',
    outline: 'none',
    boxSizing: 'border-box'
  };
  const boxed = variant === 'boxed';
  const fieldStyle = boxed ? {
    ...fieldBase,
    padding: '11px 14px',
    border: `1px solid ${focus ? focusColor : line}`,
    borderRadius: 'var(--radius-sm)',
    background: invert ? 'rgba(255,255,255,0.06)' : '#fff',
    transition: 'border-color var(--dur-base) var(--ease-standard)'
  } : {
    ...fieldBase,
    padding: '9px 2px',
    border: 'none',
    borderBottom: `2px solid ${focus ? focusColor : line}`,
    transition: 'border-color var(--dur-base) var(--ease-standard)'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '15px',
      fontWeight: 500,
      color: labelColor,
      marginBottom: '8px'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ln-slate)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldStyle,
      opacity: disabled ? 0.5 : 1
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Marketing.jsx
try { (() => {
// Legal Nodes — Marketing website UI kit (homepage recreation).
// Composes the design-system primitives from the DS bundle.
const {
  Button,
  Card,
  StatTile,
  ProcessStep,
  Badge,
  Logo,
  Icon
} = window.LegalNodesDesignSystem_0002bb;
const {
  useState
} = React;
const GREEN = 'var(--ln-green)';
const wrap = {
  maxWidth: '1180px',
  margin: '0 auto',
  padding: '0 40px',
  boxSizing: 'border-box'
};

/* ---------------- Nav ---------------- */
function Nav({
  onCta
}) {
  const items = ['Industry', 'Tasks', 'Why Legal Nodes', 'Pricing', 'Resources'];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      background: GREEN,
      position: 'sticky',
      top: 0,
      zIndex: 50,
      borderBottom: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      height: '76px',
      gap: '32px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    height: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '26px',
      marginLeft: '24px',
      flex: 1
    }
  }, items.map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    style: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: '14px',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, t, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5,
      fontSize: '10px'
    }
  }, "\u25BE")))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, "Free Discovery Call"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary-invert",
    size: "sm"
  }, "Log In")));
}

/* ---------------- Hero ---------------- */
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: GREEN,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '-120px',
      top: '30px',
      pointerEvents: 'none'
    }
  }, [300, 450, 600].map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      position: 'absolute',
      width: d,
      height: d,
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '50%',
      top: -d / 2,
      left: -d / 2
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: '48px',
      alignItems: 'center',
      padding: '80px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: '52px',
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Your Delegated Legal Department, built into your ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ln-yellow)'
    }
  }, "growth engine")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.72)',
      fontSize: '17px',
      lineHeight: 1.55,
      maxWidth: '440px',
      marginTop: '20px'
    }
  }, "We embed legal into your GTM efforts, accelerating growth with every step."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '22px',
      marginTop: '34px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onCta
  }, "Schedule Free Discovery Call"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: '13px',
      maxWidth: '150px',
      lineHeight: 1.4
    }
  }, "Free 30-min call to discuss your legal needs."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Documents Approved",
    value: "",
    variant: "light",
    hint: "View All",
    progress: 0.62,
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Steps Complete",
    value: "3",
    suffix: "/4",
    variant: "dark",
    progress: 0.75,
    status: "View All"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Days Remaining",
    value: "5\u20137",
    variant: "light",
    status: "On Track"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Credits",
    value: "32",
    variant: "accent",
    status: "View All",
    style: {
      gridColumn: '1 / -1'
    }
  })))));
}

/* ---------------- Problem ---------------- */
function Problem() {
  const items = [{
    icon: 'receipt',
    t: 'Expensive Fees',
    d: 'Billable hours. Hidden costs. Pricey retainers.'
  }, {
    icon: 'clock',
    t: 'Slow Service Delivery',
    d: 'Weeks to align and deliver on legal tasks.'
  }, {
    icon: 'target',
    t: 'Limited Domain Expertise',
    d: 'Founders pay more when single-focus firms require multiple experts.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '84px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center',
      fontSize: '34px',
      fontWeight: 700,
      color: 'var(--ln-ink)',
      margin: 0
    }
  }, "To modern businesses, legal equals cost"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--text-muted)',
      marginTop: '10px',
      fontSize: '15px'
    }
  }, "We don't fault you when the traditional legal landscape looks like this"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '20px',
      marginTop: '44px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.t,
    variant: "muted",
    style: {
      borderLeft: '3px solid var(--ln-slate)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '38px',
      height: '38px',
      borderRadius: '999px',
      background: '#fff',
      border: '1px solid var(--border-light)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ln-slate)',
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '17px',
      color: 'var(--ln-ink)'
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '14px',
      lineHeight: 1.5,
      marginTop: '8px',
      marginBottom: 0
    }
  }, it.d))))));
}

/* ---------------- Approach (levers) ---------------- */
function Lever({
  title,
  sub,
  objective,
  tasks,
  results
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "light",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '22px 20px 16px',
      borderBottom: '1px solid var(--border-light)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: '15px',
      letterSpacing: '0.06em',
      color: 'var(--ln-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)',
      marginTop: '4px'
    }
  }, sub)), /*#__PURE__*/React.createElement(Row, {
    label: "Objective"
  }), /*#__PURE__*/React.createElement(Line, {
    text: objective
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Legal Tasks"
  }), tasks.map(t => /*#__PURE__*/React.createElement(Line, {
    key: t[0],
    text: t[0],
    right: /*#__PURE__*/React.createElement(Badge, {
      tint: "outline",
      size: "sm"
    }, t[1], " Credits")
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Results"
  }), results.map(r => /*#__PURE__*/React.createElement(Line, {
    key: r,
    text: r
  })));
}
function Row({
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ln-mist-2)',
      textAlign: 'center',
      fontSize: '12px',
      fontWeight: 600,
      color: 'var(--text-body)',
      padding: '7px 0',
      borderBottom: '1px solid var(--border-light)'
    }
  }, label);
}
function Line({
  text,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '12px',
      padding: '11px 18px',
      borderBottom: '1px solid var(--border-light)',
      fontSize: '14px',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\u21B3 ", text), right);
}
function Approach() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: GREEN,
      padding: '84px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center',
      fontSize: '32px',
      fontWeight: 700,
      color: '#fff',
      margin: 0
    }
  }, "Legal Nodes offers a new approach to legal"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(255,255,255,0.65)',
      marginTop: '10px',
      fontSize: '15px'
    }
  }, "We give you the capacity of a delegated legal department without the costs and downsides"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px',
      marginTop: '44px'
    }
  }, /*#__PURE__*/React.createElement(Lever, {
    title: "LAUNCH LEVER",
    sub: "Get market-ready with clarity and compliance",
    objective: "Company Incorporation",
    tasks: [['Corporate Structuring', 6], ['Bank Account Opening', 4], ['IP Protection', 3]],
    results: ['Legal Setup', 'Compliant Launch', 'Market Readiness']
  }), /*#__PURE__*/React.createElement(Lever, {
    title: "EXPANSION LEVER",
    sub: "Scale faster with an aligned legal system",
    objective: "International Market Entry",
    tasks: [['Jurisdiction Analysis', 6], ['Legal Structuring', 4], ['Employment Agreement Prep', 8]],
    results: ['Seamless Expansion', 'Protected Growth']
  }))));
}

/* ---------------- How it works ---------------- */
function HowItWorks({
  onCta
}) {
  const steps = ['Submit a Request', 'Get an Estimate', 'Top Up Your Balance', 'Get Results', 'Track Progress'];
  const [active, setActive] = useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '84px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center',
      fontSize: '34px',
      fontWeight: 700,
      color: 'var(--ln-ink)',
      margin: 0
    }
  }, "How it Works"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--text-muted)',
      marginTop: '10px',
      fontSize: '15px'
    }
  }, "Pay for Tasks, not hours. No retainers. No surprises."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '56px',
      marginTop: '44px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    onMouseEnter: () => setActive(i),
    style: {
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement(ProcessStep, {
    index: i + 1,
    title: s,
    active: i === active
  })))), /*#__PURE__*/React.createElement(Card, {
    variant: "muted",
    style: {
      padding: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)',
      marginBottom: '6px'
    }
  }, "What legal support do you need?"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-light)',
      borderRadius: '8px',
      padding: '14px',
      fontSize: '14px',
      color: 'var(--text-muted)',
      minHeight: '80px'
    }
  }, "e.g. \"I need to incorporate in the UAE and open a bank account\u2026\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '18px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    uppercase: false,
    onClick: onCta
  }, "Get an Estimate"))))));
}
window.MarketingParts = {
  Nav,
  Hero,
  Problem,
  Approach,
  HowItWorks,
  wrap,
  GREEN
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Marketing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Sections.jsx
try { (() => {
// Legal Nodes marketing — comparison, testimonials, CTA/footer, lead form.
const {
  Button,
  Card,
  Badge,
  Logo,
  Icon,
  Input
} = window.LegalNodesDesignSystem_0002bb;
const {
  useState
} = React;
const {
  wrap,
  GREEN
} = window.MarketingParts;

/* ---------------- Comparison ---------------- */
function Comparison() {
  const rows = [['Cost Requirements', '$100k+ annual retainers regardless of actual work', 'Pay per task. Save 60–80% vs retainers or in-house', 'Cheap upfront, costly retakes later'], ['Flexibility & Scale', 'Rigid contracts and slow onboarding', 'AI + Expert workflow ensuring quality on 180+ legal tasks', "Static templates that don't scale with complexity"], ['Transparency', 'Unpredictable hourly billing and unclear deliverables', 'Credit-based pricing. Know upfront cost before you start', 'Flat fees with no expert guidance'], ['Strategic Support', 'Siloed specialists increase costs and slow reaction', 'Full legal department coverage: GTM, fundraising, compliance', "No expert guidance — you're on your own"], ['Risk Management', 'Reactive risk management, after the fact', 'Tailored legal roadmap — a dedicated legal expert to assess and mitigate risk', 'High compliance risk and lawsuit concerns']];
  const cell = {
    padding: '18px 16px',
    fontSize: '13px',
    lineHeight: 1.45,
    verticalAlign: 'top',
    borderBottom: '1px solid var(--border-light)'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ln-mist)',
      padding: '84px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center',
      fontSize: '34px',
      fontWeight: 700,
      color: 'var(--ln-ink)',
      margin: 0
    }
  }, "Clear Comparison at a Glance"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--text-muted)',
      marginTop: '10px',
      fontSize: '15px'
    }
  }, "Our model outperforms traditional firms and DIY legal tools"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      display: 'grid',
      gridTemplateColumns: '160px 1fr 1.15fr 1fr',
      background: '#fff',
      borderRadius: '14px',
      overflow: 'hidden',
      border: '1px solid var(--border-light)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cell,
      borderBottom: 'none'
    }
  }), /*#__PURE__*/React.createElement(ColHead, {
    label: "Traditional Firms"
  }), /*#__PURE__*/React.createElement(ColHead, {
    label: "Legal Nodes",
    highlight: true
  }), /*#__PURE__*/React.createElement(ColHead, {
    label: "DIY Legal Tools"
  }), rows.map((r, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cell,
      fontWeight: 600,
      color: 'var(--ln-ink)',
      background: 'var(--ln-mist-2)'
    }
  }, r[0]), /*#__PURE__*/React.createElement(TCell, {
    text: r[1],
    bad: true
  }), /*#__PURE__*/React.createElement(TCell, {
    text: r[2],
    highlight: true
  }), /*#__PURE__*/React.createElement(TCell, {
    text: r[3],
    bad: true
  }))))));
}
function ColHead({
  label,
  highlight
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 16px',
      textAlign: 'center',
      fontWeight: 700,
      fontSize: '13px',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      color: highlight ? '#fff' : 'var(--text-muted)',
      background: highlight ? GREEN : 'transparent',
      borderBottom: highlight ? 'none' : '1px solid var(--border-light)'
    }
  }, highlight ? /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    height: 22
  }) : label);
}
function TCell({
  text,
  bad,
  highlight
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px',
      fontSize: '13px',
      lineHeight: 1.45,
      borderBottom: '1px solid var(--border-light)',
      display: 'flex',
      gap: '9px',
      color: highlight ? '#fff' : 'var(--text-body)',
      background: highlight ? GREEN : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: highlight ? 'var(--ln-yellow)' : bad ? 'var(--ln-danger)' : 'var(--ln-success)',
      flex: 'none',
      fontWeight: 700
    }
  }, highlight ? '✓' : bad ? '✕' : '✓'), /*#__PURE__*/React.createElement("span", null, text));
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const data = [{
    q: 'We chose Legal Nodes because we felt their offering was a great match for our needs as a startup. Legal Nodes assisted us with implementation of various documents and processes to make our product GDPR-ready before the official launch.',
    n: 'Vlad Niculescu',
    r: 'CEO & Co-founder, Flowpoint'
  }, {
    q: "Legal Nodes VLO have been so helpful in guiding me with my first steps around establishing my Web3 startup legally. It's a very complex space, and it's reassuring having someone so knowledgeable to reach out to.",
    n: 'Shane Neubauer',
    r: 'CEO & Co-founder, Beyond'
  }];
  const [i, setI] = useState(0);
  const t = data[i];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '84px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      maxWidth: '820px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '32px',
      fontWeight: 700,
      color: 'var(--ln-ink)',
      margin: 0
    }
  }, "Hear from Our Clients"), /*#__PURE__*/React.createElement(Card, {
    variant: "muted",
    style: {
      marginTop: '36px',
      padding: '40px',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "\"", t.q, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--ln-ink)'
    }
  }, t.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--ln-slate)'
    }
  }, t.r))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement(NavBtn, {
    dir: "\u2190",
    onClick: () => setI((i + data.length - 1) % data.length)
  }), /*#__PURE__*/React.createElement(NavBtn, {
    dir: "\u2192",
    onClick: () => setI((i + 1) % data.length)
  }))));
}
function NavBtn({
  dir,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: '44px',
      height: '44px',
      borderRadius: '999px',
      border: '1px solid var(--border-light)',
      background: '#fff',
      cursor: 'pointer',
      fontSize: '16px',
      color: 'var(--ln-green)'
    }
  }, dir);
}

/* ---------------- CTA + Footer ---------------- */
function CtaFooter({
  onCta
}) {
  const cols = [['Company Registration', ['Register Company UK', 'Register Company US', 'Register Company Switzerland', 'Register Company Singapore']], ['Compliance Services', ['GDPR Compliance', 'MiCA Compliance', 'AML Act Compliance']], ['Data Protection', ['Privacy Impact Assessments', 'Data Protection Officer', 'Get a GDPR Representative']], ['Legal Structuring', ['DAO Legal Structure', 'ICO Legal Structuring', 'Token Legal Structuring']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: GREEN
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      textAlign: 'center',
      padding: '84px 40px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: '32px',
      fontWeight: 700,
      margin: 0,
      lineHeight: 1.25
    }
  }, "Legal has always been the avoided function,", /*#__PURE__*/React.createElement("br", null), "let's transform that together."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.65)',
      marginTop: '14px',
      fontSize: '15px'
    }
  }, "Join 400+ businesses who trust Legal Nodes for legal and compliance support."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '28px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onCta
  }, "Book Free Intro Call")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.45)',
      marginTop: '14px',
      fontSize: '12px'
    }
  }, "Free 30-min call to discuss your legal needs.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '54px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4,1fr)',
      gap: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    height: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: '13px',
      marginTop: '18px'
    }
  }, "hello@legalnodes.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      marginTop: '16px',
      color: 'rgba(255,255,255,0.6)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "at-sign",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "camera",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 18
  }))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '11px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginBottom: '14px'
    }
  }, h), items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      display: 'block',
      color: 'rgba(255,255,255,0.6)',
      fontSize: '13px',
      textDecoration: 'none',
      marginBottom: '9px'
    }
  }, it))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '20px 40px',
      borderTop: '1px solid var(--border-dark)',
      color: 'rgba(255,255,255,0.4)',
      fontSize: '12px'
    }
  }, "\xA9 2025 Legal Nodes. All rights reserved.")));
}

/* ---------------- Lead form overlay (UAE incorporation) ---------------- */
function LeadForm({
  open,
  onClose
}) {
  const [sent, setSent] = useState(false);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(7,26,30,0.6)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: GREEN,
      borderRadius: '20px',
      maxWidth: '900px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '44px 40px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    height: 30
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: '32px',
      fontWeight: 800,
      lineHeight: 1.1,
      marginTop: '30px'
    }
  }, "Incorporate Your Tech Company in the UAE"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: '14px',
      marginTop: '14px'
    }
  }, "No hidden fees \u2022 Free consultation \u2022 Expert guidance throughout the process")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '40px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      border: 'none',
      background: 'transparent',
      fontSize: '20px',
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, "\u2715"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      textAlign: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '54px',
      height: '54px',
      borderRadius: '999px',
      background: 'var(--ln-success)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '26px'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '18px',
      color: 'var(--ln-ink)'
    }
  }, "Thanks \u2014 we'll be in touch.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '18px',
      fontWeight: 700,
      color: 'var(--ln-ink)',
      marginBottom: '22px'
    }
  }, "Your contact info"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your Name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '26px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    uppercase: false,
    onClick: () => setSent(true)
  }, "Submit"))))));
}
window.MarketingParts2 = {
  Comparison,
  Testimonials,
  CtaFooter,
  LeadForm
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.LBALogo = __ds_scope.LBALogo;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Input = __ds_scope.Input;

})();
