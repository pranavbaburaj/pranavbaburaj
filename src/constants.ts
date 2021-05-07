import { blue, bold, magenta, cyan, gray, green, grey, hex, red, white, whiteBright } from 'chalk'

export const data = {
    name: bold.green("       "),
    handle: white("          @pranavbaburaj"),
    work: `${white("Young developer")} ${hex("#2b82b2").bold("")}`,
    blog: grey("https://medium.com/") + whiteBright("@pranavbaburaj"),
    twitter: gray("https://twitter.com/") + cyan("_pranavbaburaj"),
    github: gray("https://github.com/") + green("pranavbaburaj"),
    web: cyan("https://about.me/ridermansb"),
    discord: magenta("pranavbaburaj") + " " + magenta("#3361"),
  
    labelWork: white.bold("       Work:"),
    labelBlog: white.bold("     Medium:"),
    labelTwitter: white.bold("    Twitter:"),
    labelnpm: white.bold("        npm:"),
    labelGitHub: white.bold("     GitHub:"),
    labelLinkedIn: white.bold("   LinkedIn:"),
    labelWeb: white.bold("        Web:"),
    labelCard: white.bold("       Card:"),
    labelDiscord: white.bold("       Discord:"),

};