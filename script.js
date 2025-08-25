// Data structure containing all the laws
const LAWS = [
    { number: 199, year: 1952, start: '1952-10-01', appliesOnce: true, changes: [
        { contractBefore: '1952-09-18', propertyStart: '1944-01-01', propertyEnd: '1952-09-17', tenantType: [1, 2, 3, 4], areaLevel: [0, 1, 2, 3], change: -0.15 }
    ]},
    { number: 55, year: 1958, start: '1958-07-01', appliesOnce: true, changes: [
        { contractBefore: '1958-06-13', propertyStart: '1952-09-18', propertyEnd: '1958-06-11', tenantType: [1, 2, 3, 4], areaLevel: [0, 1, 2, 3], change: -0.20 }
    ]},
    { number: 168, year: 1961, start: '1961-12-01', appliesOnce: true, changes: [
        { contractBefore: '1961-11-05', propertyStart: '1958-06-12', propertyEnd: '1961-11-05', tenantType: [1, 2, 3, 4], areaLevel: [0, 1, 2, 3], change: -0.20 }
    ]},
    { number: 7, year: 1965, start: '1965-03-01', appliesOnce: true, changes: [
        { contractBefore: '1965-03-01', propertyStart: '1944-01-01', propertyEnd: '1961-11-05', tenantType: [1, 2, 3, 4], areaLevel: [0, 1, 2, 3], change: -0.20 },
        { contractBefore: '1965-03-01', propertyStart: '1961-11-06', propertyEnd: '1965-03-01', tenantType: [1, 2, 3, 4], areaLevel: [0, 1, 2, 3], change: -0.35 }
    ]},
    { number: 52, year: 1969, appliesOnce: true, isRenovation: true, changes: [
        { contractBefore: '1996-01-31', propertyStart: '1900-01-01', propertyEnd: '1996-01-31', tenantType: [1, 2, 3, 4], areaLevel: [0, 1, 2, 3], change: 0.50 }
    ]},
    { number: 136, year: 1981, start: '1982-01-01', appliesOnce: false, endYear: 1986, changes: [
        { contractBefore: '1981-08-01', propertyStart: '1900-01-01', propertyEnd: '1943-12-31', tenantType: [3, 4], areaLevel: [0, 1, 2, 3], change: 0.30 },
        { contractBefore: '1981-08-01', propertyStart: '1944-01-01', propertyEnd: '1961-11-04', tenantType: [3, 4], areaLevel: [0, 1, 2, 3], change: 0.20 },
        { contractBefore: '1981-08-01', propertyStart: '1961-11-05', propertyEnd: '1973-10-06', tenantType: [3, 4], areaLevel: [0, 1, 2, 3], change: 0.10 },
        { contractBefore: '1981-08-01', propertyStart: '1973-10-07', propertyEnd: '1977-09-09', tenantType: [3, 4], areaLevel: [0, 1, 2, 3], change: 0.05 }
    ]},
    { number: 6, year: 1997, start: '1997-04-01', appliesOnce: true, changes: [
        { contractBefore: '1996-01-31', propertyStart: '1900-01-01', propertyEnd: '1943-12-31', tenantType: [3, 4], areaLevel: [0, 1, 2, 3], change: 8.00, isMultiplier: true },
        { contractBefore: '1996-01-31', propertyStart: '1944-01-01', propertyEnd: '1961-11-04', tenantType: [3, 4], areaLevel: [0, 1, 2, 3], change: 5.00, isMultiplier: true },
        { contractBefore: '1996-01-31', propertyStart: '1961-11-05', propertyEnd: '1973-10-06', tenantType: [3, 4], areaLevel: [0, 1, 2, 3], change: 4.00, isMultiplier: true },
        { contractBefore: '1996-01-31', propertyStart: '1973-10-07', propertyEnd: '1977-09-09', tenantType: [3, 4], areaLevel: [0, 1, 2, 3], change: 3.00, isMultiplier: true },
        { contractBefore: '1996-01-31', propertyStart: '1977-09-10', propertyEnd: '1996-01-30', tenantType: [3, 4], areaLevel: [0, 1, 2, 3], change: 0.10 }
    ]},
    { number: 6, year: 1997, start: '1998-04-01', appliesOnce: false, endYear: 2000, changes: [
        { contractBefore: '1996-01-31', propertyStart: '1900-01-01', propertyEnd: '1996-01-30', tenantType: [3, 4], areaLevel: [0, 1, 2, 3], change: 0.10 }
    ]},
    { number: 14, year: 2001, start: '2001-04-01', appliesOnce: false, endYear: 2025, changes: [
        { contractBefore: '1996-01-31', propertyStart: '1900-01-01', propertyEnd: '1977-09-09', tenantType: [3], areaLevel: [0, 1, 2, 3], change: 0.02 },
        { contractBefore: '1996-01-31', propertyStart: '1977-09-10', propertyEnd: '1996-01-30', tenantType: [3], areaLevel: [0, 1, 2, 3], change: 0.01 }
    ]},
    { number: 14, year: 2001, start: '2001-04-01', appliesOnce: false, endYear: 2021, changes: [
        { contractBefore: '1996-01-31', propertyStart: '1900-01-01', propertyEnd: '1977-09-09', tenantType: [4], areaLevel: [0, 1, 2, 3], change: 0.02 },
        { contractBefore: '1996-01-31', propertyStart: '1977-09-10', propertyEnd: '1996-01-30', tenantType: [4], areaLevel: [0, 1, 2, 3], change: 0.01 }
    ]},
    { number: 10, year: 2022, start: '2022-04-01', appliesOnce: false, endYear: 2027, changes: [
        { contractBefore: '1996-01-31', propertyStart: '1900-01-01', propertyEnd: '1996-01-30', tenantType: [4], areaLevel: [0, 1, 2, 3], change: 0.15, terminationDate: '2027-03-31' }
    ]},
    // القانون 164 لسنة 2025 - الزيادة لمرة واحدة والحد الأدنى
    { number: 164, year: 2025, start: '2025-09-01', appliesOnce: true, isConditional: true, changes: [
        { contractBefore: '1996-01-31', propertyStart: '1900-01-01', propertyEnd: '1996-01-30', tenantType: [3], areaLevel: [0, 1, 2, 3], change: 5.00, isMultiplier: true, terminationDate: '2030-08-31' },
        { contractBefore: '1996-01-31', propertyStart: '1900-01-01', propertyEnd: '1996-01-30', tenantType: [1, 2], areaLevel: [1], change: 20.00, isMultiplier: true, minLimit: 1000, terminationDate: '2032-08-31' },
        { contractBefore: '1996-01-31', propertyStart: '1900-01-01', propertyEnd: '1996-01-30', tenantType: [1, 2], areaLevel: [2], change: 10.00, isMultiplier: true, minLimit: 400, terminationDate: '2032-08-31' },
        { contractBefore: '1996-01-31', propertyStart: '1900-01-01', propertyEnd: '1996-01-30', tenantType: [1, 2], areaLevel: [3], change: 10.00, isMultiplier: true, minLimit: 250, terminationDate: '2032-08-31' }
    ]},
    // القانون 164 لسنة 2025 - الزيادات السنوية اللاحقة
    { number: 164, year: 2025, start: '2026-09-01', appliesOnce: false, changes: [
        { contractBefore: '1996-01-31', propertyStart: '1900-01-01', propertyEnd: '1996-01-30', tenantType: [3], areaLevel: [0, 1, 2, 3], change: 0.15, terminationDate: '2030-08-31' }
    ]},
    { number: 164, year: 2025, start: '2026-09-01', appliesOnce: false, changes: [
        { contractBefore: '1996-01-31', propertyStart: '1900-01-01', propertyEnd: '1996-01-30', tenantType: [1, 2], areaLevel: [0, 1, 2, 3], change: 0.15, terminationDate: '2032-08-31' }
    ]},
];

const MAX_FREE_USES = 3;
const WHATSAPP_NUMBER = '00201061724667';
const EMAIL_ADDRESS = 'youssefata@Gmail.com';
const PREMIUM_CODE = 'PREMIUM100';

function getUsesLeft() {
    let uses = localStorage.getItem('freeUsesLeft');
    if (uses === null) {
        localStorage.setItem('freeUsesLeft', MAX_FREE_USES);
        return MAX_FREE_USES;
    }
    return parseInt(uses, 10);
}

function decreaseUses() {
    let uses = getUsesLeft();
    if (uses > 0) {
        uses--;
        localStorage.setItem('freeUsesLeft', uses);
    }
    return uses;
}

function isPremium() {
    return getUsesLeft() > 0;
}

function roundToTwoDecimal(value) {
    return Math.round(value * 100) / 100;
}

function isSameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

document.getElementById('renovation-count').addEventListener('input', (event) => {
    const count = parseInt(event.target.value) || 0;
    const container = document.getElementById('renovation-date-fields');
    container.innerHTML = '';

    if (count > 0 && count <= 6) {
        for (let i = 1; i <= count; i++) {
            const row = document.createElement('div');
            row.className = 'renovation-row';
            row.innerHTML = `
                <div class="renovation-cell label">تاريخ الترميم الشامل #${i}</div>
                <div class="renovation-cell empty-space"></div>
                <div class="renovation-cell month-input"><input type="number" class="month-input-field" placeholder="شهر" min="1" max="12"></div>
                <div class="renovation-cell year-input"><input type="number" class="year-input-field" placeholder="سنة" min="1900" max="2100"></div>
            `;
            container.appendChild(row);
        }
    }
});


function calculateRentLogic() {
    try {
        const originalRentInput = document.getElementById('original-rent').value;
        const originalRent = parseFloat(originalRentInput.replace(',', '.'));
        
        if (originalRentInput.trim() === '' || isNaN(originalRent)) {
            return {
                finalRent: 0,
                history: [],
                terminationDate: null
            };
        }

        const creationDate = new Date(Date.UTC(document.getElementById('creation-year').value, document.getElementById('creation-month').value - 1, document.getElementById('creation-day').value));
        const contractDate = new Date(Date.UTC(document.getElementById('contract-year').value, document.getElementById('contract-month').value - 1, document.getElementById('contract-day').value));
        const targetDate = new Date(Date.UTC(document.getElementById('target-year').value, document.getElementById('target-month').value - 1, document.getElementById('target-day').value));
        
        let currentRent = originalRent;
        
        const tenantType = parseInt(document.getElementById('tenant-type').value);
        const areaLevel = parseInt(document.getElementById('area-level').value);

        const renovationDates = Array.from(document.querySelectorAll('.renovation-row')).map((row) => {
            const day = 1;
            const month = row.querySelector('.month-input-field').value;
            const year = row.querySelector('.year-input-field').value;
            return new Date(Date.UTC(year, month - 1, day));
        }).filter(date => !isNaN(date.getTime()));

        let history = [{
            rent: currentRent,
            date: `${contractDate.getDate().toString().padStart(2, '0')}/${(contractDate.getMonth() + 1).toString().padStart(2, '0')}/${contractDate.getFullYear()}`,
            change_percent: 'N/A',
            change_value: 'N/A',
            law: 'طبقاً لعقد الإيجار'
        }];
        
        if (isNaN(currentRent) || isNaN(contractDate.getTime()) || isNaN(targetDate.getTime())) {
            return {
                finalRent: 0,
                history: history,
                terminationDate: null
            };
        }

        let terminationDate = null;
        let events = [];

        // تجميع كل الأحداث (مرة واحدة وترميم ودورية) في قائمة واحدة
        const allLaws = [...LAWS];

        // تجميع القوانين التي تطبق مرة واحدة
        allLaws.filter(l => l.appliesOnce && !l.isRenovation).forEach(law => {
            law.changes.forEach(change => {
                const lawStart = new Date(law.start);
                const contractBefore = new Date(change.contractBefore);
                const propertyStart = new Date(change.propertyStart);
                const propertyEnd = new Date(change.propertyEnd);
                if (lawStart.getTime() >= contractDate.getTime() && lawStart.getTime() <= targetDate.getTime() && contractDate.getTime() <= contractBefore.getTime() && creationDate.getTime() >= propertyStart.getTime() && creationDate.getTime() <= propertyEnd.getTime() && change.tenantType.includes(tenantType) && change.areaLevel.includes(areaLevel)) {
                    events.push({ ...law, ...change, effectiveDate: lawStart, isAnnualEvent: false });
                }
            });
        });

        // تطبيق قوانين الترميم
        const renovationLaw = allLaws.find(l => l.isRenovation);
        if (renovationLaw) {
            renovationDates.forEach(renovationDate => {
                const effectiveDate = new Date(renovationDate);
                effectiveDate.setMonth(effectiveDate.getMonth() + 1);
                if (effectiveDate.getTime() > contractDate.getTime() && effectiveDate.getTime() <= targetDate.getTime()) {
                    const change = renovationLaw.changes.find(c => contractDate.getTime() < new Date(c.contractBefore).getTime() && (isSameDay(creationDate, new Date(c.propertyStart)) || creationDate.getTime() > new Date(c.propertyStart).getTime()) && (isSameDay(creationDate, new Date(c.propertyEnd)) || creationDate.getTime() < new Date(c.propertyEnd).getTime()) && c.tenantType.includes(tenantType));
                    if (change) {
                        events.push({ ...renovationLaw, ...change, isRenovation: true, effectiveDate: effectiveDate, isAnnualEvent: false });
                    }
                }
            });
        }
        
        // تجميع الزيادات الدورية لكل سنة
        LAWS.filter(l => !l.appliesOnce).forEach(law => {
            let year = new Date(law.start).getFullYear();
            const startMonth = new Date(law.start).getMonth();
            const startDate = new Date(law.start).getDate();
            while (year <= targetDate.getFullYear()) {
                const effectiveDate = new Date(Date.UTC(year, startMonth, startDate));
                
                if (law.endYear && effectiveDate.getFullYear() > law.endYear) {
                    break;
                }
                
                if (effectiveDate.getTime() >= contractDate.getTime() && effectiveDate.getTime() <= targetDate.getTime()) {
                    law.changes.forEach(change => {
                        const contractBefore = new Date(change.contractBefore);
                        const propertyStart = new Date(change.propertyStart);
                        const propertyEnd = new Date(change.propertyEnd);
                        
                        if (contractDate.getTime() < contractBefore.getTime() && creationDate.getTime() >= propertyStart.getTime() && creationDate.getTime() <= propertyEnd.getTime() && change.tenantType.includes(tenantType) && change.areaLevel.includes(areaLevel)) {
                           events.push({ ...law, ...change, effectiveDate: effectiveDate, isAnnualEvent: true });
                           if (change.terminationDate) {
                                const newTermDate = new Date(change.terminationDate);
                                if (!terminationDate || newTermDate.getTime() > terminationDate.getTime()) {
                                    terminationDate = newTermDate;
                                }
                           }
                        }
                    });
                }
                year++;
            }
        });

        events.sort((a, b) => a.effectiveDate - b.effectiveDate);
        
        let appliedEvents = new Set();
        let lastAppliedRecurringLaw = null;
        let lastAppliedRecurringYear = null;
        
        events.forEach(event => {
            const eventKey = `${event.number}-${event.year}-${event.effectiveDate.getFullYear()}-${event.effectiveDate.getMonth()}-${event.effectiveDate.getDate()}-${event.change}-${event.isRenovation}-${event.isAnnualEvent}`;
            if (appliedEvents.has(eventKey) || event.effectiveDate.getTime() > targetDate.getTime()) {
                return;
            }
            
            let applyChange = true;
            if (event.isAnnualEvent) {
                // Check if a new recurring law has superseded an older one.
                if (lastAppliedRecurringLaw && (event.number !== lastAppliedRecurringLaw.number || event.year !== lastAppliedRecurringLaw.year)) {
                    // New recurring law detected. This should supersede all older ones from the next year.
                    lastAppliedRecurringLaw = event;
                    lastAppliedRecurringYear = event.effectiveDate.getFullYear();
                } else if (!lastAppliedRecurringLaw) {
                    // This is the first recurring law to apply.
                    lastAppliedRecurringLaw = event;
                    lastAppliedRecurringYear = event.effectiveDate.getFullYear();
                }

                // If the current event is from an older recurring law, check if a newer one has already been applied in a previous year.
                if (lastAppliedRecurringLaw && (event.number !== lastAppliedRecurringLaw.number || event.year !== lastAppliedRecurringLaw.year) && event.effectiveDate.getFullYear() > lastAppliedRecurringYear) {
                    applyChange = false;
                }
            }

            if (applyChange) {
                let previousRent = currentRent;
                let newRent;
                let changePercent;
                let changeAmount;

                // Calculate the percentage to be displayed from the law's change value
                if (event.isMultiplier) {
                    changePercent = `${(event.change * 100).toFixed(0)}%`;
                } else {
                    changePercent = `${(event.change * 100).toFixed(2)}%`;
                }
                
                // Calculate the new rent based on the law's change
                if (event.isMultiplier) {
                    newRent = previousRent * event.change;
                } else if (event.isFixedAmount) {
                    newRent = previousRent + event.change;
                } else {
                    newRent = previousRent + (previousRent * event.change);
                }
                
                // Check for minLimit and apply the user's requested display logic
                let isMinLimitApplied = false;
                if (event.minLimit && newRent < event.minLimit) {
                    newRent = event.minLimit;
                    isMinLimitApplied = true;
                }
                
                // Calculate the change amount based on the final new rent
                changeAmount = newRent - previousRent;
                
                // Round values for display
                newRent = roundToTwoDecimal(newRent);
                changeAmount = roundToTwoDecimal(changeAmount);

                currentRent = newRent;
                appliedEvents.add(eventKey);

                history.push({
                    rent: currentRent,
                    date: `${event.effectiveDate.getDate().toString().padStart(2, '0')}/${(event.effectiveDate.getMonth() + 1).toString().padStart(2, '0')}/${event.effectiveDate.getFullYear()}`,
                    change_percent: changePercent,
                    change_value: changeAmount.toFixed(2),
                    law: `${event.number} لسنة ${event.year}`
                });
            }
        });
        
        history.push({
            rent: roundToTwoDecimal(currentRent),
            date: `${targetDate.getDate().toString().padStart(2, '0')}/${(targetDate.getMonth() + 1).toString().padStart(2, '0')}/${targetDate.getFullYear()}`,
            change_percent: 'N/A',
            change_value: 'N/A',
            law: 'الأجرة النهائية في التاريخ المطلوب'
        });
        
        return {
            finalRent: currentRent,
            history: history,
            terminationDate: terminationDate
        };
    } catch (error) {
        console.error("An error occurred during calculation:", error);
        return {
            finalRent: 0,
            history: [],
            terminationDate: null
        };
    }
}


function calculateAndShowResult() {
    const usesLeft = getUsesLeft();
    const finalRentDisplay = document.getElementById('final-rent-display');
    const historyDisplay = document.getElementById('rent-history-display');
    const historyTitle = document.getElementById('history-title');
    
    finalRentDisplay.innerHTML = '';
    historyDisplay.innerHTML = '';
    historyTitle.style.display = 'none';

    const userCode = document.getElementById('user-code').value;
    if (userCode === PREMIUM_CODE) {
        localStorage.setItem('freeUsesLeft', 100);
        alert("تم تفعيل 100 استخدام جديد. يرجى إعادة تحميل الصفحة.");
        return;
    }

    if (!isPremium()) {
        finalRentDisplay.innerHTML = `
            <p style="color:yellow; font-size:12px;">انتهت الاستخدامات المجانية للبرنامج.</p>
            <p style="font-size:10px;">للاشتراك تواصل على الواتساب: ${WHATSAPP_NUMBER}</p>
            <p style="font-size:10px;">أو الإيميل: ${EMAIL_ADDRESS}</p>
        `;
        return;
    }

    const rentData = calculateRentLogic();
    const finalRent = rentData.finalRent;
    const history = rentData.history;
    const terminationDate = rentData.terminationDate;

    if (history.length === 0 || isNaN(finalRent)) {
        finalRentDisplay.innerHTML = `<p style="color:yellow;">الرجاء إدخال جميع البيانات المطلوبة.</p>`;
        return;
    }
    
    const newUsesLeft = decreaseUses();

    document.getElementById('result-section').style.display = 'block';
    finalRentDisplay.textContent = finalRent.toFixed(2);
    
    // إظهار عنوان جدول تدرج الأجرة
    historyTitle.style.display = 'block';

    const historyTable = document.createElement('table');
    historyTable.className = "history-table";
    
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    const headers = ["قيمة الأجرة", "تستحق من تاريخ", "نسبة التغيير", "قيمة التغيير", "حسب القانون"];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    historyTable.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    
    // تعديل عرض السطر الأول
    const firstRow = document.createElement('tr');
    firstRow.className = "first-history-row";
    const rentCell = document.createElement('td');
    rentCell.textContent = history[0].rent.toFixed(2);
    firstRow.appendChild(rentCell);
    const dateCell = document.createElement('td');
    dateCell.textContent = history[0].date;
    firstRow.appendChild(dateCell);
    const mergedCell = document.createElement('td');
    mergedCell.textContent = history[0].law;
    mergedCell.colSpan = 3;
    firstRow.appendChild(mergedCell);
    tbody.appendChild(firstRow);
    
    // عرض باقي السطور من ثاني سطر فصاعدا
    for (let i = 1; i < history.length; i++) {
        const item = history[i];
        const row = document.createElement('tr');
        
        const rentCell = document.createElement('td');
        rentCell.textContent = item.rent.toFixed(2);
        row.appendChild(rentCell);
        
        const dateCell = document.createElement('td');
        dateCell.textContent = item.date;
        row.appendChild(dateCell);
        
        const changePercentCell = document.createElement('td');
        changePercentCell.textContent = item.change_percent;
        row.appendChild(changePercentCell);
        
        const changeValueCell = document.createElement('td');
        changeValueCell.textContent = item.change_value;
        row.appendChild(changeValueCell);
        
        const lawCell = document.createElement('td');
        lawCell.textContent = item.law;
        row.appendChild(lawCell);

        tbody.appendChild(row);
    }
    
    let finalDateString = '';
    if (terminationDate) {
        finalDateString = `${terminationDate.getDate().toString().padStart(2, '0')}/${(terminationDate.getMonth() + 1).toString().padStart(2, '0')}/${terminationDate.getFullYear()}`;
    }

    if (terminationDate) {
        const row = document.createElement('tr');
        row.className = 'final-row';
        const cell = document.createElement('td');
        cell.colSpan = 5;
        cell.textContent = `هذا العقد سيتم إلغاؤه بحكم القانون رقم 164 لسنة 2025 في تاريخ ${finalDateString}`;
        row.appendChild(cell);
        tbody.appendChild(row);
    }
    
    historyTable.appendChild(tbody);
    historyDisplay.appendChild(historyTable);
    
    const printButton = document.createElement('button');
    printButton.textContent = 'طباعة جدول تدرج الأجرة';
    printButton.className = 'print-button';
    printButton.onclick = () => window.print();
    historyDisplay.appendChild(printButton);

    if (newUsesLeft >= 1) {
        alert(`تبقى لك ${newUsesLeft} استخدامات مجانية.`);
    } else if (newUsesLeft === 0) {
        alert("انتهت الاستخدامات المجانية للبرنامج.");
    }
}