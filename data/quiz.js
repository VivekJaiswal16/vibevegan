export const quizQuestions = [
  {
    q: 'How many times a week do you eat meat?',
    opts: ['Never', '1–2 times', '3–5 times', 'Every day'],
    scores: [0, 1, 2, 3],
  },
  {
    q: 'How often do you have dairy (milk, curd, paneer, cheese)?',
    opts: ['Rarely', '1–2 times/week', 'Daily', 'Multiple times daily'],
    scores: [0, 1, 2, 3],
  },
  {
    q: 'Do you eat eggs?',
    opts: ['Never', 'Occasionally', 'Weekly', 'Daily'],
    scores: [0, 1, 2, 3],
  },
  {
    q: 'How much fish or seafood do you eat?',
    opts: ['Never', 'Rarely', '1–2x/week', '3+ times/week'],
    scores: [0, 1, 2, 3],
  },
  {
    q: 'How aware are you of where your food comes from?',
    opts: ['Very aware', 'Somewhat', 'Not much', 'Never thought about it'],
    scores: [3, 2, 1, 0],
  },
]

export const resultMessages = [
  "You're already making thoughtful choices! Going fully vegan could seal the deal.",
  'Your diet has a real footprint. Going vegan for 22 days could make a measurable difference.',
  "Going vegan could be one of the most impactful decisions you ever make. The numbers don't lie.",
  'Your current diet has a significant environmental cost. The 22-day challenge is the perfect place to start.',
]

/** Given total score (0–15), return impact estimates */
export function calcImpact(total) {
  const pct = total / 15
  return {
    co2:     Math.round(pct * 28),
    water:   Math.round(pct * 1200),
    land:    Math.round(pct * 15),
    animals: Math.round(pct * 95),
    message: resultMessages[Math.min(Math.floor(pct * 4), 3)],
  }
}
