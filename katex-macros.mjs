// katex-macros.mjs (version 0.1.0 @ hikimay)
// This file defines custom macros for KaTeX rendering in Astro.
// It is imported in astro.config.ts to be used globally across the site.

const macros = {};

// alphabets
const lowerChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const latinChars = [...lowerChars, ...upperChars];

// greek letters
const greekChars = [
  'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta',
  'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi',
  'rho', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega'
];


const applyMacro = (prefix, wrapper) => {
    // Define macros for latin characters
    latinChars.forEach(c => {
        macros[`\\${prefix}${c}`] = `${wrapper}{${c}}`;
    })
    // Define macros for greek characters
    greekChars.forEach(c => {
        macros[`\\${prefix}${c}`] = `${wrapper}{\\${c}}`;
    })
};

// bold letters (\veca, \vecA, \vecalpha, etc.)
applyMacro('vec', '\\boldsymbol');
// hat letters (\hata, \hatA, \hatalpha, etc.)
applyMacro('hat', '\\hat');
// bar letters (\bara, \barA, \baralpha, etc.)
applyMacro('bar', '\\overline');
// tilde letters (\tildea, \tildeA, \tildealpha, etc.)
applyMacro('tilde', '\\widetilde');
// caligraphic letters (\calA, \calB, \calC, etc.)
upperChars.forEach(c => {
    macros[`\\cal${c}`] = `\\mathcal{${c}}`;
});

Object.assign(macros, {
    // colors
    "\\remark": "\\textcolor{magenta}{#1}",
    "\\red": "\\textcolor{red}{#1}",
    "\\blue": "\\textcolor{blue}{#1}",
    "\\green": "\\textcolor{green}{#1}",
    "\\brown": "\\textcolor{brown}{#1}",
    // parentheses
    "\\paren": "\\left(#1\\right)", // ()
    "\\sqbra": "\\left[#1\\right]", // []
    "\\curbra": "\\left\\{#1\\right\\}", // {}
    "\\brace": "\\left\\{#1\\right\\}", // {}
    "\\abra": "\\left\\langle#1\\right\\rangle", // <>
    "\\abs": "\\left|#1\\right|", // ||
    "\\card": "\\left\\lvert#1\\right\\rvert", // ||
    "\\norm": "\\left\\lVert#1\\right\\rVert",
    "\\set": "\\left\\{#1\\right\\}",
    "\\redmiddle": "\\mathrel{}\\middle#1\\mathrel{}",
    "\\Set": "\\left\\{#1\\relmiddle|#2\\right\\}",
    // mathbb letters
    "\\RR": "\\mathbb{R}",
    "\\ZZ": "\\mathbb{Z}",
    "\\CC": "\\mathbb{C}",
    "\\NN": "\\mathbb{N}",
    "\\PP": "\\mathbb{P}",
    // math operators
    "\\argmax": "\\arg\\max",
    "\\argmin": "\\arg\\min",
    "\\sign": "\\mathrm{sign}",
    "\\diag": "\\mathrm{diag}",
    "\\tr": "\\mathrm{tr}",
    "\\rank": "\\mathrm{rank}",
    "\\span": "\\mathrm{span}",
    "\\ker": "\\mathrm{Ker}",
    "\\im": "\\mathrm{Im}",
    "\\rank": "\\mathrm{rank}",
    "\\dim": "\\mathrm{dim}",
    "\\frb": "\\mathsf{F}",
    "\\trn": "\\top",
    "\\opt": "\\star",
    "\\conv": "\\mathrm{conv}",
    "\\mini": "\\operatorname*{minimize}",
    "\\maxi": "\\operatorname*{maximize}",
    "\\argmin": "\\operatorname*{arg\\,min}",
    "\\argmax": "\\operatorname*{arg\\,max}",
    "\\subto": "\\text{subject\\ to}",
    "\\st": "\\text{s.t.}",
    // other math symbols
    "\\Simplex": "\\Delta^{#1-1}",
    "\\diam": "\\text{diam}",
    "\\veczero": "\\boldsymbol{0}",
    "\\matzero": "\\boldsymbol{O}",
    "\\matidentity": "\\boldsymbol{I}_{#1}",
    // expectation, variance, probability
    "\\ex": "\\mathbb{E}_{#1}\\left[#2\\right]",
    "\\var": "\\mathrm{Var}_{#1}\\left[#2\\right]",
    "\\prob": "\\mathbb{P}_{#1}\\left[#2\\right]",
});

export default macros;