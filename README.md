# T04-2

# Appliance-Energy-Consumption
An interactive website showcasing the energy consumption of televisions currently available on the Australian market.
---
# Visit the Website:
https://appliance-energy-consumption.vercel.app/#home

---

## Data Story

## Audience

The primary audience for this visualisation is Australian consumers planning to purchase a new TV, helping them understand how their choice of TV impacts long-term electricity costs and energy consumption.

### Their Interest

Televisions are one of the most common household appliances in Australia, but the electricity bills they generate are often overlooked. While picture quality, design, and screen size are usually the main factors consumers consider when buying a TV, the ongoing expenses on the bill will increase significantly as electricity prices rise in the National Electricity Market (NEM). Transforming government-registered appliance data into intuitive charts helps consumers weigh screen performance against lifecycle operating costs before making a purchase.

### What the Visualisation Answers

1. What types of screen technologies are currently available in Australia? Which is the most common?
2. What screen sizes are available on the market? Which is the most common?
3. Which brands offer the largest number of models?
4. Which type of screen technology consumes the least power?
5. Does a larger screen necessarily mean higher energy consumption?
6. What is the relationship between energy efficiency star ratings and screen size?
7. Are there differences in power consumption among different brands?

This visualization uses graphical representations instead of raw‑data tables to answer these questions, enabling non‑technical audiences to understand the content at a glance.

---

## About the Data

### Data Source

The data analyzed in this project originates from the official Energy Rating Database published under the Equipment Energy Efficiency (E3) Program by the Australian Government (Department of Climate Change, Energy, the Environment and Water).

- **Access Point:** Publicly accessible open data portal ([data.gov.au](https://data.gov.au))
- **Format:** Tabular CSV documentation containing registered appliance specifications and energy metrics.

### Data Processing

The raw CSV file was downloaded from data.gov.au and cleaned in KNIME Analytics Platform using the following steps:

Data Processing
The raw CSV file was downloaded directly from data.gov.au and processed using KNIME Analytics Platform. The workflow consisted of the following steps:

1. **Column Filter** — drop columns with missing values, including Family name, Grand date, Product website, Representative Brand URL, and What test standard was used.

2. **Sorter** — sorted the data by Model number in ascending order to make it easier to review duplicates.

3. **Duplicate Row Filter** — to check for duplicates based on model number.

4. **Row Filter** — only kept the rows where the "Availability Status" is "Available", and remove the unavailable models.

5. **Column Filter** — retain only the columns required to answer the seven research questions (screen technology, screen size, brand, star rating, and energy consumption).

6. **String Manipulation** — convert all brand names to uppercase to standardize the capitalization format.

The cleaned dataset was used to generate the charts displayed on the "Televisions" page.

### Privacy

This dataset contains only product-level information and does not involve personal identities, household customer records, purchase history, or private telemetry data. This website does not track, store, or collect any visitor data.

### Accuracy and Limitations

- **Cross-Sectional Release** - The records reflect the status only as of the day the registration data was downloaded. It does not update automatically, nor does it include new models released after that date.
- **Laboratory Conditions** - Power consumption figures are declared by the manufacturer based on standard test conditions, rather than measurements taken in actual home environments. Actual household power consumption may vary depending on factors such as brightness settings, HDR media playback, volume levels, and daily usage duration.

### Ethics

- Data is utilized transparently under the Australian Government open data framework for educational, non-commercial purposes.
- All visual charts present comparative distributions objectively without artificial axis scaling or selective filtering intended to promote or disadvantage any individual brand or technology.
- This dataset is released under a government open license and can be used, reused, and redistributed free of charge.


---
# How AI was used

I used GitHub Copilot throughout the project as a development assistant in Visual Studio Code. Below is a summary of how I applied it.

## Writing the HTML/CSS/JS boilerplate
I asked for starting code for the menu bar, the function to change pages, and CSS page layout. The AI gave me a usable basic structure. Then I changed it to match project requirements.

# Reflecting on the experience
The AI was most useful for:

- Quickly creating base code so I could focus on the actual content
- Explaining hard‑to‑understand JavaScript ideas in simple English
- Giving short and neat CSS flexbox and grid styles for card containers that work on different screen sizes

The AI was least useful when:

- It made guesses based on things I never mentioned
- When my prompt was unclear, the AI would make up its own ideas and move away from what I actually wanted.

# What I learned

- Double‑check everything. I looked through every line of code, every text label and every colour before saving my work.
- AI is just a tool, not a replacement. I was responsible for all design decisions, topic selection, data interpretation, and final‑stage refinements.
