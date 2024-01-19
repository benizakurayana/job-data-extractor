
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'extractData') {
    // meta-data
    const jobUrl = $('link[rel="canonical"]').attr('href');
    const id = jobUrl.substring(jobUrl.lastIndexOf('/') + 1);

    // ol.breadcrumb-list
    const breadcrumbItems = $('.breadcrumb-list__item');
    const company = breadcrumbItems.eq(1).find('a').text().trim();
    const companyLink = breadcrumbItems.eq(1).find('a').attr('href');
    const title = breadcrumbItems.eq(2).find('span').attr('title');
    const dateUpdated = $('.job-header__title span[title]').attr('title');

    // div.job-description
    const description = $('p.job-description__content').text().trim();
    const categories = [];
    $('.category-item u').each(function() {
      categories.push($(this).text().trim());
    });
    const salary = $('.list-row__head > h3:contains("工作待遇")').parent().next().find('p.text-primary').text().trim();
    const type = $('.list-row__head > h3:contains("工作性質")').parent().next().text().trim();
    const location = $('.job-address').text().trim();
    const locationMapUrl = $('.job-address a').attr('href');
    const supervisor =  $('.list-row__head > h3:contains("管理責任")').parent().next().text().trim();
    const expatriate = $('.list-row__head > h3:contains("出差外派")').parent().next().text().trim();
    const workingHours = $('.list-row__head > h3:contains("上班時段")').parent().next().text().trim();
    const dayOff = $('.list-row__head > h3:contains("休假制度")').parent().next().text().trim();
    const onBoard = $('.list-row__head > h3:contains("可上班日")').parent().next().text().trim();
    const headCount = $('.list-row__head > h3:contains("需求人數")').parent().next().text().trim();

    // div.job-requirement
    const experience = $('.list-row__head > h3:contains("工作經歷")').parent().next().text().trim();
    const degree = $('.list-row__head > h3:contains("學歷要求")').parent().next().text().trim();
    const major = $('.list-row__head > h3:contains("科系要求")').parent().next().text().trim();
    const language = $('.list-row__head > h3:contains("語文條件")').parent().next().text().trim();
    const tools = $('.list-row__head > h3:contains("擅長工具")').parent().next().text().trim();
    const skills = $('.list-row__head > h3:contains("工作技能")').parent().next().text().trim();
    const others = $('.list-row__head > h3:contains("其他條件")').parent().next().text().trim();

    // div.job-contact-table
    const contact = $('.job-contact-table__head > h3:contains("聯絡人")').parent().next().text().trim();
    const email = $('.job-contact-table__head > h3:contains("E-mail")').parent().next().text().trim();
    const phone = $('.job-contact-table__head h3:contains("電洽")').parent().next().text().trim();
    const contactRemarks = $('.job-contact-table__head > h3:contains("其他")').parent().next().text().trim();

    const extractedData = {
      jobUrl: jobUrl,
      id: id,
      title: title,
      company: company,
      companyLink: companyLink,
      dateUpdated: dateUpdated,
      description: description,
      categories: categories,
      salary: salary,
      type: type,
      location: location,
      locationMapUrl: locationMapUrl,
      supervisor: supervisor,
      expatriate: expatriate,
      workingHours: workingHours,
      dayOff: dayOff,
      onBoard: onBoard,
      headCount: headCount,
      experience: experience,
      degree: degree,
      major: major,
      language: language,
      tools: tools,
      skills: skills,
      others: others,
      contact: contact,
      email: email,
      phone: phone,
      contactRemarks: contactRemarks
    };
    
  
    console.log(extractedData);

    chrome.runtime.sendMessage({action: 'post', data: extractedData}, function() {});
    
    
  }
});
