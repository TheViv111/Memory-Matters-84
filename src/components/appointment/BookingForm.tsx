
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';

interface BookingFormProps {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
}

const BookingForm = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }: BookingFormProps) => {
  const availableTimes = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
  ];

  return (
    <ScrollReveal direction="up" delay={0.2}>
      <Card className="shadow-2xl border-0 bg-gradient-to-br from-white via-white to-gray-50/50 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-medical-teal/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-medical-orange/5 rounded-full blur-xl" />
        
        <CardHeader className="pb-4 relative">
          <CardTitle className="font-playfair text-xl text-medical-charcoal text-center">
            Select Date & Time
          </CardTitle>
          <p className="text-center text-sm text-gray-600 font-inter">
            Choose your preferred appointment slot
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mt-2"></div>
        </CardHeader>
        
        <CardContent className="p-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="font-inter font-medium text-medical-charcoal flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2 text-medical-teal" />
                Preferred Date *
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white border-2 hover:bg-gradient-to-r hover:from-medical-teal/5 hover:to-medical-orange/5 hover:border-medical-teal transition-all duration-300 shadow-md hover:shadow-lg",
                      !selectedDate && "text-muted-foreground",
                      selectedDate && "border-medical-teal/50 bg-gradient-to-r from-medical-teal/5 to-white"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-medical-teal" />
                    {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white border-2 border-medical-teal/20 shadow-2xl rounded-xl" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    className="rounded-xl bg-white"
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label className="font-inter font-medium text-medical-charcoal flex items-center">
                <Clock className="w-4 h-4 mr-2 text-medical-teal" />
                Preferred Time *
              </Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger className="border-2 hover:border-medical-teal transition-all duration-300 bg-white shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-medical-teal/5 hover:to-medical-orange/5">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-medical-teal/20 shadow-xl rounded-xl">
                  {availableTimes.map((time) => (
                    <SelectItem 
                      key={time} 
                      value={time}
                      className="hover:bg-gradient-to-r hover:from-medical-teal/10 hover:to-medical-orange/10 focus:bg-gradient-to-r focus:from-medical-teal/10 focus:to-medical-orange/10 transition-all duration-200 rounded-lg margin-1"
                    >
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {selectedDate && selectedTime && (
            <ScrollReveal direction="up" delay={0.3}>
              <div className="mt-6 p-6 bg-gradient-to-r from-medical-teal/10 via-white to-medical-orange/10 rounded-xl border-2 border-medical-teal/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
                <div className="text-center">
                  <p className="font-inter text-sm text-gray-600 mb-2 flex items-center justify-center">
                    <CalendarIcon className="w-4 h-4 mr-2 text-medical-teal" />
                    Your Selected Appointment
                  </p>
                  <p className="font-playfair text-lg font-semibold text-medical-charcoal bg-gradient-to-r from-medical-teal to-medical-deep-blue bg-clip-text text-transparent">
                    {format(selectedDate, "EEEE, MMMM do, yyyy")} at {selectedTime}
                  </p>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mt-2"></div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};

export default BookingForm;
